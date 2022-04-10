import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Label } from '@mui/icons-material';

const AccordionComp = () => {

  const [simulationData, setSimulationData] = useState({
    //dmId: '1',
    demographic: [
      // {
      //   fieldId: "First Name",
      //   fieldName: "fName",
      //   mockData: "f name",
      //   emma_field_name: "emma fieldname",
      // },
      // {
      //   fieldId: "Last Name",
      //   fieldName: "lName",
      //   mockData: "l name",
      //   emma_field_name: "",
      // }
    ],
    provider: [
      {
        fieldId: "Provider Name",
        fieldName: "pName",
        mockData: "p name",
        emma_field_name: "",
      },
      {
        fieldId: "Another Provider Name",
        fieldName: "APName",
        mockData: "l name",
        emma_field_name: "",
      }
    ],
  })

  const onChangeText = (keyHeader, i, e)=>{
    //console.log(e.target.value)
    //console.log(i)
    simulationData[keyHeader][i].mockData = e.target.value
    setSimulationData({
      ...simulationData,
      //[keyHeader] : [...simulationData[keyHeader], {...simulationData[keyHeader][i]}],
    })
  }

  return (
    <div>
      {
        Object.keys(simulationData).map((keyHeader) => {
          if(simulationData[keyHeader].length> 0){
            return (
              <Accordion key={keyHeader}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{keyHeader}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {
                    simulationData[keyHeader].map((row, i) => {
                    
                      return (
                        <Typography key={i}>
                         
                            {row.fieldId} : 
                         
                          <input
                              type="text"
                              value={row.mockData}
                              onChange={(e)=>{onChangeText(keyHeader, i, e)}}
                          />
                        </Typography>
                      )
                    })
                  }
  
                </AccordionDetails>
              </Accordion>
            )
          }
          
        })
      }



    </div>
  )
}

export default AccordionComp