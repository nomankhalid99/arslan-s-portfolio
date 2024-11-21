import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react"; // Import useEffect for script loading
import { motion, useInView } from "framer-motion"; // Impor

const ContactUs: React.FC = () => {
  // Load Calendly script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup the script when component unmounts
    };
  }, []);

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Use the useInView hook to track when the elements are in view
  const isHeadingInView = useInView(headingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Box id="contact" className="bg-[#0D0D0D] relative py-16">
      <Box className="w-5/6 mx-auto">
        <Grid container>
          <Grid item xs={12}>
            <Box textAlign="center">
              <motion.div
                ref={headingRef} // Attach the ref to track this element
                initial={{ opacity: 0, y: -50 }}
                animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  fontSize={{ sm: 50, xs: 40 }}
                  fontWeight={700}
                  className="text-[#FFAA00]"
                >
                  Let's work together!
                </Typography>
              </motion.div>
              <motion.div
                ref={paragraphRef} // Attach the ref to track this element
                initial={{ opacity: 0 }}
                animate={isParagraphInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <Typography
                  fontSize={{ sm: 18, xs: 16 }}
                  className="text-neutral-400"
                >
                  Get in touch to discuss your project and explore how to bring
                  your vision to life.
                </Typography>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Calendly Integration */}
        <Box textAlign="center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly moved down
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Fade in and slide up
            transition={{ duration: 0.6 }} // Animation duration
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/devsleader99/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "200px", height: "700px" }}
            ></div>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
