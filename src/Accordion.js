import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComp = () => {

  const [simulationData, setSimulationData] = useState({
    //dmId: '1',
    demographic: [
      {
        fieldId: "999",
        fieldName: "my fname",
        mockData: "hhhh",
        emma_field_name: "emma fieldname",
      },
      {
        fieldId: "",
        fieldName: "",
        mockData: "",
        emma_field_name: "",
      }
    ],
    provider: [
      {
        fieldId: "",
        fieldName: "",
        mockData: "",
        emma_field_name: "",
      }
    ],
  })

  return (
    <div>
      {
        Object.keys(simulationData).map((keyHeader) => {
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
                        {JSON.stringify(row)}
                      </Typography>
                    )
                  })
                }

              </AccordionDetails>
            </Accordion>
          )
        })
      }



    </div>
  )
}

export default AccordionComp