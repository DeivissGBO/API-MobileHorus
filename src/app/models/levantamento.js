const mongoose = require("../../database");
const bcrypt = require("bcryptjs");
const LevantamentoSchema = new mongoose.Schema({
  //nome levantamento
  name: {
    type: String,
  
  },
  //porquem esta sendo feito o levantamento
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },
  //nome cliente
  identificacao_cliente: {
    type: String,
  
  },
  //endereco cliente
  endereco: {
    type: String,
   
  },
  //contato cliente
  contato: {
    type: String,
    
  },
  email:{
    type:String, 
  },

  //Fotos/////////////////////////////////////
  fotos:{
    type:[{}]
  },
  //Quantif de documentos////////////////
  /*departamentos: [String],

  tipos_caixas: [String],
  quantidade_caixas: [String],*/

  observacoes:{
    type:String
  },
  /*objQuantif:{
    type:String
  },

  digitalizacao:{ 
  type:String
  },*/

  valor_total_preparacao: {
    type: Number,
    
  },

  total_imagens: {
    type: Number,
    
  },

  valor_total_digitalizacao_imagens: {
    type: Number,
    
  },
  valor_total_preparacao_imagens: {
    type: Number,
    
  },
  valor_total_projeto: {
    type:Number
  },
  valor_total_por_imagem: {
    type: Number,
    
  },
  ////////////////////////////////////

  //plano de trabalho por processo////
  quant_processos_plan_trab_processo: {
    type: Number
  },

  quant_caixas_plan_trab_processo: {
    type: Number
  },

  tipo_documentos_plan_trab_processo: {
    type: String
  },

  parametrizacao_horas_plan_trab_processo: {
    type: Number
  },
 /* parametrizacao_horas_plan_trab_processo: {
    type: Number
  },*/
  parametrizacao_pessoas_plan_trab_processo: {
    type: Number
  },
  parametrizacao_total_horas_plan_trab_processo: {
    type: Number
  },

  parametrizacao_valor_total_plan_trab_processo: {
    type: Number
  },
  supervisor_horas_plan_trab_processo: {
    type: Number
  },

  supervisor_pessoas_plan_trab_processo: {
    type: Number
  },

  supervisor_total_horas_plan_trab_processo: {
    type: Number
  },

  supervisor_valor_total_plan_trab_processo: {
    type: Number
  },

  operacao_organizacao_horas_plan_trab_processo: {
    type: Number
  },
  operacao_organizacao_pessoas_plan_trab_processo: {
    type: Number
  },

  operacao_organizacao_total_horas_plan_trab_processo: {
    type: Number
  },

  operacao_organizacao_valor_total_plan_trab_processo: {
    type: Number
  },

  indexacao_horas_plan_trab_processo: {
    type: Number
  },
  indexacao_pessoas_plan_trab_processo: {
    type: Number
  },

  indexacao_total_horas_plan_trab_processo: {
    type: Number
  },

  indexacao_valor_total_plan_trab_processo: {
    type: Number
  },

  valor_total_horas_trabalhadas_plan_trab_processo: {
    type: Number
  },
  ////////////////////////////////////

  ///plano de trabalho por organização de documentos

  setor_plan_trab_org_doc: {
    type: String
  },

  quant_caixas_trab_org_doc: {
    type: Number
  },

  tipo_documento_trab_org_doc: {
    type: String
  },

  parametrizacao_horas_plan_trab_org_doc: {
    type: Number
  },
  parametrizacao_pessoas_plan_trab_org_doc: {
    type: Number
  },
  parametrizacao_total_horas_plan_trab_org_doc: {
    type: Number
  },

  parametrizacao_valor_total_plan_trab_org_doc: {
    type: Number
  },
  supervisor_horas_plan_trab_org_doc: {
    type: Number
  },

  supervisor_pessoas_plan_trab_org_doc: {
    type: Number
  },

  supervisor_total_horas_plan_trab_org_doc: {
    type: Number
  },

  superior_valor_total_plan_trab_org_doc: {
    type: Number
  },

  operacao_organizacao_horas_plan_trab_org_doc: {
    type: Number
  },
  operacao_organizacao_pessoas_plan_trab_org_doc: {
    type: Number
  },

  operacao_organizacao_total_horas_plan_trab_org_doc: {
    type: Number
  },

  operacao_organizacao_valor_total_plan_trab_org_doc: {
    type: Number
  },

  indexacao_horas_plan_trab_org_doc: {
    type: Number
  },
  indexacao_pessoas_plan_trab_org_doc: {
    type: Number
  },

  indexacao_total_horas_plan_trab_org_doc: {
    type: Number
  },

  indexacao_valor_total_plan_trab_org_doc: {
    type: Number
  },

  valor_total_horas_trabalhadas_plan_trab_org_doc: {
    type: Number
  },

  /////////////////////////////////////////////////

  ///plano de trabalho organização por periodo ou lote

  setor_plan_trab_periodo_lote: {
    type: String
  },

  quant_caixas_trab_periodo_lote: {
    type: Number
  },

  tipo_documento_trab_periodo_lote: {
    type: String
  },

  parametrizacao_horas_plan_trab_periodo_lote: {
    type: Number
  },  
  parametrizacao_pessoas_plan_trab_periodo_lote: {
    type: Number
  },
  parametrizacao_total_horas_plan_trab_periodo_lote: {
    type: Number
  },

  parametrizacao_valor_total_plan_trab_periodo_lote: {
    type: Number
  },
  supervisor_horas_plan_trab_periodo_lote: {
    type: Number
  },

  supervisor_pessoas_plan_trab_periodo_lote: {
    type: Number
  },

  supervisor_total_horas_plan_trab_periodo_lote: {
    type: Number
  },

  superior_valor_total_plan_trab_periodo_lote: {
    type: Number
  },

  operacao_organizacao_horas_plan_trab_periodo_lote: {
    type: Number
  },
  operacao_organizacao_pessoas_plan_trab_periodo_lote: {
    type: Number
  },

  operacao_organizacao_total_horas_plan_trab_periodo_lote: {
    type: Number
  },

  operacao_organizacao_valor_total_plan_trab_periodo_lote: {
    type: Number
  },

  indexacao_horas_plan_trab_periodo_lote: {
    type: Number
  },
  indexacao_pessoas_plan_trab_periodo_lote: {
    type: Number
  },

  indexacao_total_horas_plan_trab_periodo_lote: {
    type: Number
  },

  indexacao_valor_total_plan_trab_periodo_lote: {
    type: Number
  },

  valor_total_horas_trabalhadas_plan_trab_periodo_lote: {
    type: Number
  },
  /////////////////////////////////////////////////////

  ///Plano de trabalho cadastro de caixa////////////////
  setor_plan_trab_cad_caixa: {
    type: String
  },

  quant_caixas_trab_cad_caixa: {
    type: Number
  },

  tipo_documento_trab_cad_caixa: {
    type: String
  },

  parametrizacao_horas_plan_trab_cad_caixa: {
    type: Number
  },

  parametrizacao_pessoas_plan_trab_cad_caixa: {
    type: Number
  },
  parametrizacao_total_horas_plan_trab_cad_caixa: {
    type: Number
  },

  parametrizacao_valor_total_plan_trab_cad_caixa: {
    type: Number
  },
  supervisor_horas_plan_trab_cad_caixa: {
    type: Number
  },

  supervisor_pessoas_plan_trab_cad_caixa: {
    type: Number
  },

  supervisor_total_horas_plan_trab_cad_caixa: {
    type: Number
  },

  supervisor_valor_total_plan_trab_cad_caixa: {
    type: Number
  },

  operacao_organizacao_horas_plan_trab_cad_caixa: {
    type: Number
  },
  operacao_organizacao_pessoas_plan_trab_cad_caixa: {
    type: Number
  },

  operacao_organizacao_total_horas_plan_trab_cad_caixa: {
    type: Number
  },

  operacao_organizacao_valor_total_plan_trab_cad_caixa: {
    type: Number
  },

  indexacao_horas_plan_trab_cad_caixa: {
    type: Number
  },
  indexacao_pessoas_plan_trab_cad_caixa: {
    type: Number
  },

  indexacao_total_horas_plan_trab_cad_caixa: {
    type: Number
  },

  indexacao_valor_total_plan_trab_cad_caixa: {
    type: Number
  },

  valor_total_horas_trabalhadas_plan_trab_cad_caixa: {
    type: Number
  },
  /////////////////////////////////////////////////////

  ///Protocolo/////////////////////////////////////////

  setor_protocolo: {
    type: String
  },

  quant_caixas_protocolo: {
    type: Number
  },

  supervisor_quant_protocolo: {
    type: Number
  },
  supervisor_valor_total_protocolo: {
    type: Number
  },
  auxiliar_quant_protocolo: {
    type: Number
  },

  auxiliar_valor_total_protocolo: {
    type: Number
  },
  chapa_quant_protocolo: {
    type: Number
  },
  chapa_valor_total_protocolo: {
    type: Number
  },
  motorista_quant_protocolo: {
    type: Number
  },
  motorista_valor_total_protocolo: {
    type: Number
  },
  diaria_quant_protocolo: {
    type: Number
  },
  diaria_valor_total_protocolo: {
    type: Number
  },

  valor_total_protocolo: {
    type: Number
  },

  ////////////////////////////////////////EQUIPAMENTOS E MATERIAIS


  frete_quant_equipamentos_materiais: {
    type: Number
  },
  frete_valor_total_equipamentos_materiais: {
    type: Number
  },
  veiculo_quant_equipamentos_materiais: {
    type: Number
  },
  veiculo_valor_total_equipamentos_materiais: {
    type: Number
  },
  notebook_quant_equipamentos_materiais: {
    type: Number
  },
  notebook_valor_total_equipamentos_materiais: {
    type: Number
  },

  epi_quantidade_equipamentos_materiais: {
    type: Number
  },

  epi_valor_total_equipamentos_materiais: {
    type: Number
  },

  hospedagem_quant_equipamentos_materiais: {
    type: Number
  },
  hospedagem_valor_total_equipamentos_materiais: {
    type: Number
  },
  combustivel_quant_equipamentos_materiais: {
    type: Number
  },
  combustivel_valor_total_equipamentos_materiais: {
    type: Number
  },
  valor_total_equipamentos_materiais: {
    type: Number
  },

  /////////////////////////////////////////////////////

  //material aplicado/////////////////////////////////

  caixa_padrao_quant_material: {
    type: Number
  },

  caixa_padrao_valor_total_material: {
    type: Number
  },

  caixa_especial_quant_material: {
    type: Number
  },

  caixa_especial_valor_total_material: {
    type: Number
  },

  lacre_quant_material: {
    type: Number
  },
  lacre_valor_total_material: {
    type: Number
  },
  fita_quant_material: {
    type: Number
  },
  fita_valor_total_material: {
    type: Number
  },
  etiqueta_quant_material: {
    type: Number
  },
  etiqueta_valor_total_material: {
    type: Number
  },
  saco_quant_material: {
    type: Number
  },
  saco_valor_total_material: {
    type: Number
  },
  valor_total_material: {
    type: Number
  },
  ///////////////////////////////////////////////////

  ///Servico Mensal/////////////////////////////////

  custodia_caixa_padrao_quant: {
    type: Number
  },
  custodia_caixa_padrao_valor: {
    type: Number
  },
  custodia_caixa_espec_quant: {
    type: Number
  },
  custodia_caixa_espec_valor: {
    type: Number
  },
  custodia_microfilme_quant: {
    type: Number
  },
  custodia_microfilme_valor: {
    type: Number
  },
  hosp_imagem_quant: {
    type: Number
  },
  hosp_imagem_valor: {
    type: Number
  },
  licenca_padrao_quant: {
    type: Number
  },
  licenca_padrao_valor: {
    type: Number
  },
  licenca_master_quant: {
    type: Number
  },
  licenca_master_valor: {
    type: Number
  },
  valor_total_serv_mensal: {
    type: Number
  },

  /////////////////////////////////////////////////

  //data realizado levantamento//
  createdAt: {
    type: Date,
    default: Date.now
  }
});
///////////////////////////

const Levantamento = mongoose.model("Levantamento", LevantamentoSchema);
module.exports = Levantamento;
