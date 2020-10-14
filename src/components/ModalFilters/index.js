import React from 'react';

import { Container, Modal } from './styles';
import Filters from '../Filters';

const ModalFilters = (
  { onClose = () => { }, children }
) => {
  return (
    <Modal>
      <Container>
        <button className="close" onClick={onClose}></button>
        <div className="content">
          <Filters type="checkbox" name="ID" label="ID" />

          <Filters type="checkbox" name="servidor" label="servidor" />

          <Filters type="checkbox" name="nro_bop" label="nro_bop" />

          <Filters type="checkbox" name="nro_bop_editado" label="nro_bop_editado" />

          <Filters type="checkbox" name="nro_tombo" label="nro_tombo" />

          <Filters type="checkbox" name="tipo_tombo" label="tipo_tombo" />


          <Filters type="checkbox" name="unidade_origem" label="unidade_origem" />

          <Filters type="checkbox" name="unidade_responsavel" label="unidade_responsavel" />

          <Filters type="checkbox" name="data_registro" label="data_registro" />

          <Filters type="checkbox" name="hora_registro" label="hora_registro" />

          <Filters type="checkbox" name="data_fato" label="data_fato" />

          <Filters type="checkbox" name="hora_fato" label="hora_fato" />

          <Filters type="checkbox" name="dia_semana" label="dia_semana" />

          <Filters type="checkbox" name="fx_4_hor" label="fx_4_hor" />

          <Filters type="checkbox" name="fx_12_hr" label="fx_12_hr" />

          <Filters type="checkbox" name="data_inst_proc" label="data_inst_proc" />

          <Filters type="checkbox" name="hora_reg_proc" label="hora_reg_proc" />

          <Filters type="checkbox" name="data_concl_proc" label="data_concl_proc" />

          <Filters type="checkbox" name="hora_concl_proc" label="hora_concl_proc" />

          <Filters type="checkbox" name="sit_proc" label="sit_proc" />

          <Filters type="checkbox" name="classe_motivo" label="classe_motivo" />

          <Filters type="checkbox" name="mes_registro" label="mes_registro" />

          <Filters type="checkbox" name="mes_fato" label="mes_fato" />

          <Filters type="checkbox" name="ano_registro" label="ano_registro" />

          <Filters type="checkbox" name="ano_fato" label="ano_fato" />

          <Filters type="checkbox" name="registros" label="registros" />

          <Filters type="checkbox" name="consolidado" label="consolidado" />

          <Filters type="checkbox" name="fato_real" label="fato_real" />

          <Filters type="checkbox" name="especificacao_crime" label="especificacao_crime" />

          <Filters type="checkbox" name="meio_emp_coest" label="meio_emp_coest" />

          <Filters type="checkbox" name="latitude" label="latitude" />

          <Filters type="checkbox" name="longitude" label="longitude" />

          <Filters type="checkbox" name="causa_presumivel" label="causa_presumivel" />

          <Filters type="checkbox" name="especializacao_fato" label="especializacao_fato" />

          <Filters type="checkbox" name="grupo_ocorrencia" label="grupo_ocorrencia" />

          <Filters type="checkbox" name="sub_grupo" label="sub_grupo" />

          <Filters type="checkbox" name="meio_empregado_sisp" label="meio_empregado_sisp" />

          <Filters type="checkbox" name="distrito" label="distrito" />

          <Filters type="checkbox" name="municipios" label="municipios" />

          <Filters type="checkbox" name="regionais" label="regionais" />

          <Filters type="checkbox" name="bairros" label="bairros" />

          <Filters type="checkbox" name="reg_integracao" label="reg_integracao" />

          <Filters type="checkbox" name="risp" label="risp" />

          <Filters type="checkbox" name="aisp" label="aisp" />

          <Filters type="checkbox" name="rua_fato" label="rua_fato" />

          <Filters type="checkbox" name="linha" label="linha" />


          <Filters type="checkbox" name="tipo_transporte" label="tipo_transporte" />

          <Filters type="checkbox" name="perimetro" label="perimetro" />

          <Filters type="checkbox" name="complemento" label="complemento" />
          <Filters type="checkbox" name="perimetro1" label="perimetro1" />


          <Filters type="checkbox" name="perimetro2" label="perimetro2" />
          <Filters type="checkbox" name="local_ocorrencia" label="local_ocorrencia" />


          <Filters type="checkbox" name="identificacao_fato" label="identificacao_fato" />

          <Filters type="checkbox" name="relator" label="relator" />

          <Filters type="checkbox" name="relato" label="relato" />

          <Filters type="checkbox" name="atuacao" label="atuacao" />


          <Filters type="checkbox" name="vit_nome" label="vit_nome" />

          <Filters type="checkbox" name="vit_alcunha" label="vit_alcunha" />

          <Filters type="checkbox" name="vit_dt_nasc" label="vit_dt_nasc" />

          <Filters type="checkbox" name="vit_idade" label="vit_idade" />

          <Filters type="checkbox" name="vit_fx_etaria" label="vit_fx_etaria" />

          <Filters type="checkbox" name="vit_nro_doc" label="vit_nro_doc" />

          <Filters type="checkbox" name="vit_tipo_doc" label="vit_tipo_doc" />

          <Filters type="checkbox" name="vit_pai" label="vit_pai" />

          <Filters type="checkbox" name="vit_mae" label="vit_mae" />

          <Filters type="checkbox" name="vit_tipo" label="vit_tipo" />


          <Filters type="checkbox" name="vit_sexo" label="vit_sexo" />


          <Filters type="checkbox" name="vit_cor_pele" label="vit_cor_pele" />

          <Filters type="checkbox" name="vit_grau_inst" label="vit_grau_inst" />

          <Filters type="checkbox" name="vit_profissao" label="vit_profissao" />

          <Filters type="checkbox" name="vit_situacao_emprego" label="vit_situacao_emprego" />

          <Filters type="checkbox" name="vit_estado_civil" label="vit_estado_civil" />

          <Filters type="checkbox" name="aut_nome" label="aut_nome" />

          <Filters type="checkbox" name="aut_alcunha" label="aut_alcunha" />
          <Filters type="checkbox" name="aut_data_nasc" label="aut_data_nasc" />

          <Filters type="checkbox" name="aut_idade" label="aut_idade" />

          <Filters type="checkbox" name="aut_fx_etaria" label="aut_fx_etaria" />

          <Filters type="checkbox" name="aut_nro_doc" label="aut_nro_doc" />

          <Filters type="checkbox" name="aut_tipo_doc" label="aut_tipo_doc" />

          <Filters type="checkbox" name="aut_pai" label="aut_pai" />

          <Filters type="checkbox" name="aut_mae" label="aut_mae" />
          <Filters type="checkbox" name="aut_tipo" label="aut_tipo" />

          <Filters type="checkbox" name="aut_sexo" label="aut_sexo" />

          <Filters type="checkbox" name="grau_de_relacionamento" label="grau_de_relacionamento" />

          <Filters type="checkbox" name="aut_cor_pele" label="aut_cor_pele" />

          <Filters type="checkbox" name="aut_grau_inst" label="aut_grau_inst" />

          <Filters type="checkbox" name="aut_profissao" label="aut_profissao" />

          <Filters type="checkbox" name="aut_sit_emprego" label="aut_sit_emprego"/>
          
          <Filters type="checkbox" name="aut_est_civil" label="aut_est_civil" />

          <Filters type="checkbox" name="meio_locomocao" label="meio_locomocao" />

          <Filters type="checkbox" name="cor_veiculo" label="cor_veiculo" />

          <Filters type="checkbox" name="marca_veic_fuga" label="marca_veic_fuga" />

          <Filters type="checkbox" name="modelo_do_veic_fuga" label="modelo_do_veic_fuga" />

          <Filters type="checkbox" name="qtd_autor" label="qtd_autor" />

          <Filters type="checkbox" name="relatorio" label="relatorio" />
          <Filters type="checkbox" name="ident_autoria" label="ident_autoria" />

          <Filters type="checkbox" name="controle" label="controle" />

          <Filters type="checkbox" name="controle_ctcd" label="controle_ctcd" />

          <Filters type="checkbox" name="flags" label="flags" />

          <Filters type="checkbox" name="pk" label="pk" />

        </div>
      </Container>
    </Modal>
  );
}

export default ModalFilters;