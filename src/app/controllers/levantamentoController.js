const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Levantamento = require('../models/levantamento');
const Foto = require('../models/foto')
const multer = require('multer');
const multerConfig = require('../../config/multer');


const router = express.Router();

router.use(authMiddleware);


router.get('/', async (request, response) => {
    try {
        const levantamentos = await Levantamento.find().populate('user');
        return response.send({ levantamentos });

    } catch (err) {
        return response.status(400).send({ error: "Erro ao carregar levantamentos" });
    }
});

router.get('/:levantamentoId', async (request, response) => {
    try {
        const levantamento = await Levantamento.findById(request.params.levantamentoId).populate(['user', 'fotos']);
        return response.send({ levantamento });

    } catch (err) {
        return response.status(400).send({ error: "Erro ao carregar o levantamento" });
    }
});

/*router.post("/fotos", multer(multerConfig).array("file"), async (req, res) => {
    console.log(req.files)
    const files = req.files
    
   /*files.map(file=>{
        const foto = Foto.create({
        name: file.originalname,
        size:file.size,
        key:file.key,
        url:file.location
    })

   })

   files.forEach((file)=>{
    const foto = Foto.create({
        name: file.originalname,
        size:file.size,
        key:file.key,

        url:file.location
    })
   })

   
   //return res.json(foto);
  });*/


  router.post("/", multer(multerConfig).array("file"), async (req, res) => {
    try{
        console.log(req)
        console.log(req.files)
        const files = req.files
        const  {name, identificacao_cliente, endereco, contato, email, fotos, observacoes ,objQuantif,
        digitalizacao,
        valor_total_preparacao,
        valor_total_digitalizacao_imagens,
       // valor_total_preparacao_imagens,
        valor_total_projeto,
        quant_processos_plan_trab_processo,
        quant_caixas_plan_trab_processo,
        tipo_documentos_plan_trab_process,
        parametrizacao_horas_plan_trab_processo,
        parametrizacao_pessoas_plan_trab_processo,
        parametrizacao_total_horas_plan_trab_processo,
        parametrizacao_valor_total_plan_trab_processo,
        supervisor_horas_plan_trab_processo,
        supervisor_pessoas_plan_trab_processo,
        supervisor_total_horas_plan_trab_processo,
        supervisor_valor_total_plan_trab_processo,
        operacao_organizacao_horas_plan_trab_processo,
        operacao_organizacao_pessoas_plan_trab_processo,
        operacao_organizacao_total_horas_plan_trab_processo,
        operacao_organizacao_valor_total_plan_trab_processo,
        indexacao_horas_plan_trab_processo,
        indexacao_pessoas_plan_trab_processo,
        indexacao_total_horas_plan_trab_processo,
        indexacao_valor_total_plan_trab_processo,
        valor_total_horas_trabalhadas_plan_trab_processo,
        setor_plan_trab_org_doc,
        quant_caixas_trab_org_doc,
        tipo_documento_trab_org_doc,
        parametrizacao_horas_plan_trab_org_doc,
        parametrizacao_pessoas_plan_trab_org_doc,
        parametrizacao_total_horas_plan_trab_org_doc,
        parametrizacao_valor_total_plan_trab_org_doc,
        supervisor_horas_plan_trab_org_doc,
        supervisor_pessoas_plan_trab_org_doc,
        supervisor_total_horas_plan_trab_org_doc,
        superior_valor_total_plan_trab_org_doc,
        operacao_organizacao_horas_plan_trab_org_doc,
        operacao_organizacao_pessoas_plan_trab_org_doc,
        operacao_organizacao_total_horas_plan_trab_org_doc,
        operacao_organizacao_valor_total_plan_trab_org_doc,
        indexacao_horas_plan_trab_org_doc,
        indexacao_pessoas_plan_trab_org_doc,
        indexacao_total_horas_plan_trab_org_doc,
        indexacao_valor_total_plan_trab_org_doc,
        valor_total_horas_trabalhadas_plan_trab_org_doc,
        setor_plan_trab_periodo_lote,
        quant_caixas_trab_periodo_lote,
        tipo_documento_trab_periodo_lote,
        parametrizacao_horas_plan_trab_periodo_lote,
        parametrizacao_pessoas_plan_trab_periodo_lote,
        parametrizacao_total_horas_plan_trab_periodo_lote,
         parametrizacao_valor_total_plan_trab_periodo_lote,
        supervisor_horas_plan_trab_periodo_lote,
        supervisor_pessoas_plan_trab_periodo_lote,
        supervisor_total_horas_plan_trab_periodo_lote,
        superior_valor_total_plan_trab_periodo_lote,
        operacao_organizacao_horas_plan_trab_periodo_lote,
        operacao_organizacao_pessoas_plan_trab_periodo_lote,
        operacao_organizacao_total_horas_plan_trab_periodo_lote,
        operacao_organizacao_valor_total_plan_trab_periodo_lote,
        indexacao_horas_plan_trab_periodo_lote,
        indexacao_pessoas_plan_trab_periodo_lote,
        indexacao_total_horas_plan_trab_periodo_lote,
        indexacao_valor_total_plan_trab_periodo_lote,
        valor_total_horas_trabalhadas_plan_trab_periodo_lote,
        setor_plan_trab_cad_caixa,
        quant_caixas_trab_cad_caixa,
        tipo_documento_trab_cad_caixa,
        parametrizacao_horas_plan_trab_cad_caixa,
        parametrizacao_pessoas_plan_trab_cad_caixa,
        parametrizacao_total_horas_plan_trab_cad_caixa,
        parametrizacao_valor_total_plan_trab_cad_caixa,
        supervisor_horas_plan_trab_cad_caixa,
        supervisor_pessoas_plan_trab_cad_caixa,
        supervisor_total_horas_plan_trab_cad_caixa,
        supervisor_valor_total_plan_trab_cad_caixa,
        operacao_organizacao_horas_plan_trab_cad_caixa,
        operacao_organizacao_pessoas_plan_trab_cad_caixa,
        operacao_organizacao_total_horas_plan_trab_cad_caixa,
        operacao_organizacao_valor_total_plan_trab_cad_caixa,
        indexacao_horas_plan_trab_cad_caixa,
        indexacao_pessoas_plan_trab_cad_caixa,
        indexacao_total_horas_plan_trab_cad_caixa,
        indexacao_valor_total_plan_trab_cad_caixa,
        valor_total_horas_trabalhadas_plan_trab_cad_caixa,
        setor_protocolo,
        quant_caixas_protocolo,
        supervisor_quant_protocolo,
        supervisor_valor_total_protocolo,
        auxiliar_quant_protocolo,
        auxiliar_valor_total_protocolo,
        chapa_quant_protocolo,
        chapa_valor_total_protocolo,
        motorista_quant_protocolo,
        motorista_valor_total_protocolo,
        diaria_quant_protocolo,
        diaria_valor_total_protocolo,
        valor_total_protocolo,
        frete_quant_equipamentos_materiais,
        frete_valor_total_equipamentos_materiais,
        veiculo_quant_equipamentos_materiais,
        veiculo_valor_total_equipamentos_materiais,
        notebook_quant_equipamentos_materiais,
        notebook_valor_total_equipamentos_materiais,
        epi_quantidade_equipamentos_materiais,
        epi_valor_total_equipamentos_materiais,
        hospedagem_quant_equipamentos_materiais,
        hospedagem_valor_total_equipamentos_materiais,
        combustivel_quant_equipamentos_materiais ,
        combustivel_valor_total_equipamentos_materiais,
        valor_total_equipamentos_materiais,
        caixa_padrao_quant_material,
        caixa_padrao_valor_total_material,
        caixa_especial_quant_material,
        caixa_especial_valor_total_material,
        lacre_quant_material,
        lacre_valor_total_material,
        fita_quant_material,
        fita_valor_total_material,
        etiqueta_quant_material,
        etiqueta_valor_total_material,
        saco_quant_material,
        saco_valor_total_material,
        valor_total_material,
        custodia_caixa_padrao_quant,
        custodia_caixa_padrao_valor,
        custodia_caixa_espec_quant,
        custodia_caixa_espec_valor,
        custodia_microfilme_quant,
        custodia_microfilme_valor,
        hosp_imagem_quant,
        hosp_imagem_valor,
        licenca_padrao_quant,
        licenca_padrao_valor,
        licenca_master_quant,
        licenca_master_valor,
        valor_total_serv_mensal
    } = req.body;

        const levantamento = await Levantamento.create({name, identificacao_cliente, endereco, contato, email, observacoes ,objQuantif,
            digitalizacao,
           valor_total_preparacao,
            valor_total_digitalizacao_imagens,
           // valor_total_preparacao_imagens,
            valor_total_projeto,
            quant_processos_plan_trab_processo,
            quant_caixas_plan_trab_processo,
            tipo_documentos_plan_trab_process,
            parametrizacao_horas_plan_trab_processo,
            parametrizacao_pessoas_plan_trab_processo,
            parametrizacao_total_horas_plan_trab_processo,
            parametrizacao_valor_total_plan_trab_processo,
            supervisor_horas_plan_trab_processo,
            supervisor_pessoas_plan_trab_processo,
            supervisor_total_horas_plan_trab_processo,
            supervisor_valor_total_plan_trab_processo,
            operacao_organizacao_horas_plan_trab_processo,
            operacao_organizacao_pessoas_plan_trab_processo,
            operacao_organizacao_total_horas_plan_trab_processo,
            operacao_organizacao_valor_total_plan_trab_processo,
            indexacao_horas_plan_trab_processo,
            indexacao_pessoas_plan_trab_processo,
            indexacao_total_horas_plan_trab_processo,
            indexacao_valor_total_plan_trab_processo,
            valor_total_horas_trabalhadas_plan_trab_processo,
            setor_plan_trab_org_doc,
            quant_caixas_trab_org_doc,
            tipo_documento_trab_org_doc,
            parametrizacao_horas_plan_trab_org_doc,
            parametrizacao_pessoas_plan_trab_org_doc,
            parametrizacao_total_horas_plan_trab_org_doc,
            parametrizacao_valor_total_plan_trab_org_doc,
            supervisor_horas_plan_trab_org_doc,
            supervisor_pessoas_plan_trab_org_doc,
            supervisor_total_horas_plan_trab_org_doc,
            superior_valor_total_plan_trab_org_doc,
            operacao_organizacao_horas_plan_trab_org_doc,
            operacao_organizacao_pessoas_plan_trab_org_doc,
            operacao_organizacao_total_horas_plan_trab_org_doc,
            operacao_organizacao_valor_total_plan_trab_org_doc,
            indexacao_horas_plan_trab_org_doc,
            indexacao_pessoas_plan_trab_org_doc,
            indexacao_total_horas_plan_trab_org_doc,
            indexacao_valor_total_plan_trab_org_doc,
            valor_total_horas_trabalhadas_plan_trab_org_doc,
            setor_plan_trab_periodo_lote,
            quant_caixas_trab_periodo_lote,
            tipo_documento_trab_periodo_lote,
            parametrizacao_horas_plan_trab_periodo_lote,
            parametrizacao_pessoas_plan_trab_periodo_lote,
            parametrizacao_total_horas_plan_trab_periodo_lote,
             parametrizacao_valor_total_plan_trab_periodo_lote,
            supervisor_horas_plan_trab_periodo_lote,
            supervisor_pessoas_plan_trab_periodo_lote,
            supervisor_total_horas_plan_trab_periodo_lote,
            superior_valor_total_plan_trab_periodo_lote,
            operacao_organizacao_horas_plan_trab_periodo_lote,
            operacao_organizacao_pessoas_plan_trab_periodo_lote,
            operacao_organizacao_total_horas_plan_trab_periodo_lote,
            operacao_organizacao_valor_total_plan_trab_periodo_lote,
            indexacao_horas_plan_trab_periodo_lote,
            indexacao_pessoas_plan_trab_periodo_lote,
            indexacao_total_horas_plan_trab_periodo_lote,
            indexacao_valor_total_plan_trab_periodo_lote,
            valor_total_horas_trabalhadas_plan_trab_periodo_lote,
            setor_plan_trab_cad_caixa,
            quant_caixas_trab_cad_caixa,
            tipo_documento_trab_cad_caixa,
            parametrizacao_horas_plan_trab_cad_caixa,
            parametrizacao_pessoas_plan_trab_cad_caixa,
            parametrizacao_total_horas_plan_trab_cad_caixa,
            parametrizacao_valor_total_plan_trab_cad_caixa,
            supervisor_horas_plan_trab_cad_caixa,
            supervisor_pessoas_plan_trab_cad_caixa,
            supervisor_total_horas_plan_trab_cad_caixa,
            supervisor_valor_total_plan_trab_cad_caixa,
            operacao_organizacao_horas_plan_trab_cad_caixa,
            operacao_organizacao_pessoas_plan_trab_cad_caixa,
            operacao_organizacao_total_horas_plan_trab_cad_caixa,
            operacao_organizacao_valor_total_plan_trab_cad_caixa,
            indexacao_horas_plan_trab_cad_caixa,
            indexacao_pessoas_plan_trab_cad_caixa,
            indexacao_total_horas_plan_trab_cad_caixa,
            indexacao_valor_total_plan_trab_cad_caixa,
            valor_total_horas_trabalhadas_plan_trab_cad_caixa,
            setor_protocolo,
            quant_caixas_protocolo,
            supervisor_quant_protocolo,
            supervisor_valor_total_protocolo,
            auxiliar_quant_protocolo,
            auxiliar_valor_total_protocolo,
            chapa_quant_protocolo,
            chapa_valor_total_protocolo,
            motorista_quant_protocolo,
            motorista_valor_total_protocolo,
            diaria_quant_protocolo,
            diaria_valor_total_protocolo,
            valor_total_protocolo,
            frete_quant_equipamentos_materiais,
            frete_valor_total_equipamentos_materiais,
            veiculo_quant_equipamentos_materiais,
            veiculo_valor_total_equipamentos_materiais,
            notebook_quant_equipamentos_materiais,
            notebook_valor_total_equipamentos_materiais,
            epi_quantidade_equipamentos_materiais,
            epi_valor_total_equipamentos_materiais,
            hospedagem_quant_equipamentos_materiais,
            hospedagem_valor_total_equipamentos_materiais,
            combustivel_quant_equipamentos_materiais ,
            combustivel_valor_total_equipamentos_materiais,
            valor_total_equipamentos_materiais,
            caixa_padrao_quant_material,
            caixa_padrao_valor_total_material,
            caixa_especial_quant_material,
            caixa_especial_valor_total_material,
            lacre_quant_material,
            lacre_valor_total_material,
            fita_quant_material,
            fita_valor_total_material,
            etiqueta_quant_material,
            etiqueta_valor_total_material,
            saco_quant_material,
            saco_valor_total_material,
            valor_total_material,
            custodia_caixa_padrao_quant,
            custodia_caixa_padrao_valor,
            custodia_caixa_espec_quant,
            custodia_caixa_espec_valor,
            custodia_microfilme_quant,
            custodia_microfilme_valor,
            hosp_imagem_quant,
            hosp_imagem_valor,
            licenca_padrao_quant,
            licenca_padrao_valor,
            licenca_master_quant,
            licenca_master_valor,
            valor_total_serv_mensal,
            user:req.userId})

        await Promise.all(files.map(async file=>{
            const levantamentoFoto = new Foto ({
                name: file.originalname,
                size:file.size,
                key:file.key,

                url:file.location
            });
            await levantamentoFoto.save();
            levantamento.fotos.push(levantamentoFoto)
        }));
        await levantamento.save();
        return res.send({levantamento})

    }catch(err){
        console.log(err)
    }


 

   
   //return res.json(foto);
  });


  

/*router.post('/',  async (request, response) => {
    try {


        const levantamento = await Levantamento.create({...request.body, user:request.userId});
        return response.send({ levantamento});

    } catch (err) {
        return response.status(400).send({ error: "Erro ao criar levantamento" });

    }
});*/

router.put('/:levantamentoId', async (request, response) => {
    try {
        const{name,identificacao_cliente,endereco, contato} = request.body;
        
        const levantamento = await Levantamento.findByIdAndUpdate(request.params.levantamentoId,
            {
                name,
                identificacao_cliente,
                endereco,
                contato,
            }, {new:true}); //new:true retorna registro atualizado
 
        return response.send({ levantamento});

    } catch (err) {
        return response.status(400).send({ error: "Erro ao  levantamento" });

    }
});

router.delete('/:levantamentoId', async (request, response) => {
    try {
         await Levantamento.findByIdAndRemove(request.params.levantamentoId).populate('user');
         return response.send({ message: 'Levantamento removido com sucesso'});

    } catch (err) {
        return response.status(400).send({ error: "Erro ao deletar o levantamento" });
    }
});
module.exports = app => app.use('/levantamentos', router);