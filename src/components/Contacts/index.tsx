import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactCard,
  ContactCardContent,
  ContactCardImage,
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
} from "./style";

import { userData } from "@/utils/userData";
import { useRef } from "react";
import { FaEnvelopeOpen, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                Vamos conversar e{" "}
                <Text as="span" type="heading2" color="brand1">
                encontrar soluções personalizadas para o seu negócio
                </Text>
                , juntos!
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                Estou disponível para uma chamada de voz. Que tal conversarmos juntos sobre criatividade?
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                 
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                 Estou esperando sua mensagem.
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu email
                </Text>
                <Text color="grey2" type="body2">
                Envie-me um e-mail relatando feedbacks, sugestões e ideias.
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = "mailto:nekelpatrick.com")
                  }
                >
                  Envie-me um e-mail.
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                Fomentando conexões contínuas e uma rede colaborativa para impulsionar o progresso.
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                 
                  href={linkedInUrl}
                >
                 Vamos nos conectar!
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
