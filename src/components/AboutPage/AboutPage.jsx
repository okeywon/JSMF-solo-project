import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-container">
      <div className="accordionBackground">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is the Jerry Snyder Memorial Fund?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The mission of the Jerry Snyder Memorial Fund is to honor the musical legacy built by Jerry Snyder at Chisholm High School by awarding one scholarship per year to a deserving student from Chisholm High School.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Who is Jerry Snyder?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            "Jerry Snyder, the Iron Range band leader everyone liked..." This caption from a 2020 Star Tribune article captured our band director well. Jerry Snyder helped people feel welcomed, happy, and capable. His students spanning 30 years received a quality music education under his skillful direction. Many have carried music into their adult lives, professionally or just for fun. To honor the man who gifted so many with mentoring, friendship, and quality music experiences in Chisholm Schools and community and church groups in Minnesota and Arizona, we have established a scholarship in his honor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className="linkFix">Why <Link to="/donate" className="linkColor">donate</Link> to the Jerry Snyder Memorial Fund?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            For many of us, “band with Mr. Snyder” tops our list. We received a quality music education under his skillful direction. Do you remember how he made us feel to be in his band--welcomed, important, skilled, and happy. The joy we experienced from our CHS band days launched many of us into an adult life which has included music at some time, whether professionally or just for fun. Now we pass on that love of music to people who matter to us. If you are not a CHS alum, but you had the privilege of making music with Jerry Snyder in another place and time, you are likely share these same feelings. Jerry gifted so many with mentoring, friendship, and quality music experiences. He did this through community and church groups in Minnesota and Arizona, as well as in the Chisholm Schools. As you may know, Jerry Snyder passed away July 11, 2020 at age 81 from COVID-related complications. To honor him, we established a scholarship in his name. Will you join us in honoring him by donating to the Jerry Snyder Memorial Fund?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>How will my contribution help a student in need?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              100% of your contribution goes toward assisting an applicant receive $2,500 award toward their college of choice! You may want to check if you can increase your donation today with a match from your employer. Your generous donations funded money for the first two scholarship recipients. Now we are raising donations for the 2023 recipient and beyond. Any amount you can donate will be helpful. Thank you for honoring Mr. Snyder and for investing in students' futures!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography>Who is eligible to apply?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Any students from Chisholm High School planning to attend college are elligible to apply.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography>How do I apply for the scholarship?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The application window will open in spring 2023. Click on the <Link to="/apply" className="linkColor">Apply</Link> tab on the navigation bar above.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography>How do I know if I'm selected or not?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You'll receive an email with all the details and what the next steps are in receiving your fund!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography>How much can I expect to receive?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Each applicant can expect to receive $2,500 toward their school of choice!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default AboutPage;
