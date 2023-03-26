import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function SimpleAccordion({dataText}) {
  return (
    <div>
      {dataText.map((e) => (
        <Accordion key={e.title} sx={{py:2,my:1,backgroundColor:'#f2f5f9'}}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{fontWeight:'bold',fontSize:'large'}}>{e.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{color:'rgb(148 163 184)'}}>{e.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
