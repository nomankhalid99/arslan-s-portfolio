import { Mail, Phone } from "@mui/icons-material";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const serviceID = "service_329j2l8";
    const templateID = "template_5hlxqe1";
    const userID = "5N5PRMQLi1nsQSlK4";

    emailjs
      .send(
        serviceID,
        templateID,
        data as unknown as Record<string, unknown>,
        userID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <Box id="contact" className="bg-[#0D0D0D] relative py-16">
      <Box className="w-5/6 mx-auto">
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box textAlign="center" mb={4}>
              <Typography
                fontSize={{ sm: 50, xs: 40 }}
                fontWeight={700}
                className="text-[#FFAA00]"
              >
                Let's work together!
              </Typography>
              <Typography
                fontSize={{ sm: 18, xs: 16 }}
                className="text-neutral-400"
              >
                Get in touch with me today to discuss your project and how I can
                help bring your vision to life
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                maxWidth: 500,
                mx: "auto",
                "& .MuiInputBase-root": {
                  color: "rgb(156 163 175)",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgb(107 114 128)",
                    borderRadius: "16px",
                    color: "rgb(156 163 175)",
                  },
                  "&:hover fieldset": {
                    color: "rgb(156 163 175)",
                    borderColor: "rgb(107 114 128)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(107 114 128)",
                    color: "rgb(156 163 175)",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgb(156 163 175)",
                },
                "& .MuiFormHelperText-root": {
                  color: "rgb(156 163 175)",
                },
              }}
            >
              <TextField
                {...register("name", { required: "Name is required" })}
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                fullWidth
              />

              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                fullWidth
              />

              <TextField
                {...register("message", { required: "Message is required" })}
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ""}
                fullWidth
              />

              <button
                type="submit"
                className="bg-[#FCC201] text-black font-semibold rounded-2xl py-4 mt-3"
              >
                Send Message
              </button>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            className="flex items-center justify-center "
          >
            <Box className="flex flex-col gap-6 mt-6 md:mt-0">
              <Box className="flex items-center gap-3">
                <Box>
                  <Phone
                    sx={{
                      fontSize: { sm: 50, xs: 40 },
                      fontWeight: 700,
                    }}
                    className="bg-[#FCC201] p-2 rounded-full"
                  />
                </Box>
                <Box className="flex flex-col gap-1">
                  <Typography fontSize={18} className="text-white">
                    Phone
                  </Typography>
                  <Typography fontSize={14} className="text-white">
                    +92 00 000 000
                  </Typography>
                </Box>
              </Box>
              <Box className="flex items-center gap-3">
                <Box>
                  <Mail
                    sx={{
                      fontSize: { sm: 50, xs: 40 },
                      fontWeight: 700,
                    }}
                    className="bg-[#FCC201] p-2 rounded-full"
                  />
                </Box>
                <Box className="flex flex-col gap-1">
                  <Typography fontSize={18} className="text-white">
                    Mail
                  </Typography>
                  <Typography fontSize={14} className="text-white">
                    devsleader@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
