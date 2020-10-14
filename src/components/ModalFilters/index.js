import React from 'react';

import { Container, Modal } from './styles';
import Filters from '../Filters';

const ModalFilters = (
  {onClose = ()=> {}, children}
) => {
  return (
    <Modal>
      <Container>
        <button className="close" onClick={onClose}></button>
        <div className="content"> 
                 <Filters type="checkbox" name="ID" label="ID"/>

                 <Filters type="checkbox" name="servidor" label="servidor"/>

                 <Filters type="checkbox" name="nro_bop" label="nro_bop"/>

                 <Filters type="checkbox" name="nro_bop_editado" label="nro_bop_editado"/>

                 <Filters type="checkbox" name="nro_tombo" label="nro_tombo"/>

                 <Filters type="checkbox" name="tipo_tombo" label="tipo_tombo"/>


                 <Filters type="checkbox" name="unidade_origem" label="unidade_origem"/>

                 <Filters type="checkbox" name="unidade_responsavel" label="unidade_responsavel"/>

                 <Filters type="checkbox" name="data_registro" label="data_registro"/>

                 <Filters type="checkbox" name="hora_registro" label="hora_registro"/>

                 <Filters type="checkbox" name="data_fato" label="data_fato"/>

                 <Filters type="checkbox" name="hora_fato" label="hora_fato"/>

                 <Filters type="checkbox" name="dia_semana" label="dia_semana"/>

                 <Filters type="checkbox" name="fx_4_hor" label="fx_4_hor"/>

                 <Filters type="checkbox" name="fx_12_hr" label="fx_12_hr"/>

                 <Filters type="checkbox" name="data_inst_proc" label="data_inst_proc"/>

                 <Filters type="checkbox" name="hora_reg_proc" label="hora_reg_proc"/>

                 <Filters type="checkbox" name="data_concl_proc" label="data_concl_proc"/>

                 <Filters type="checkbox" name="hora_concl_proc" label="hora_concl_proc"/>

                 <Filters type="checkbox" name="sit_proc" label="sit_proc"/>

                 <Filters type="checkbox" name="classe_motivo" label="classe_motivo"/>

                 <Filters type="checkbox" name="mes_registro" label="mes_registro"/>

                 <Filters type="checkbox" name="mes_fato" label="mes_fato"/>

                 <Filters type="checkbox" name="ano_registro" label="ano_registro"/>

                 <Filters type="checkbox" name="ano_fato" label="ano_fato"/>

                 <Filters type="checkbox" name="registros" label="registros"/>

                   <Filters type="checkbox" name="consolidado" label="consolidado"/> 
                    <Filters type="checkbox" name="fato_real" label="fato_real"/>
                   <Filters type="checkbox" name="especificacao_crime" label="especificacao_crime"/>
                   <Filters type="checkbox" name="meio_emp_coest" label="meio_emp_coest"/>
                   <Filters type="checkbox" name="latitude" label="latitude"/>
                   <Filters type="checkbox" name="longitude" label="longitude"/>
                   <Filters type="checkbox" name="ano_fato" label="ano_fato"/>
                   <Filters type="checkbox" name="ano_fato" label="ano_fato"/>
                   <Filters type="checkbox" name="ano_fato" label="ano_fato"/>
                   <Filters type="checkbox" name="ano_fato" label="ano_fato"/>

                     <Filters type="checkbox" name="ano_fato" label="ano_fato"/>
                       <Filters type="checkbox" name="ano_fato" label="ano_fato"/>

        
        </div>
      </Container>
    </Modal>
  );
}          

export default ModalFilters;