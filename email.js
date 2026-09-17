import React from "react";
import emailjs from "emailjs-com";

/**
 * Função para enviar email de ENCOMENDAS
 * Mantém tudo o que já existia, mas agora recebe os dados corretamente.
 */
export function enviarEncomenda(formData, setMensagemSucesso) {
    const templateParams = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        encomenda: formData.encomenda,
        quantidade: formData.quantidade,
    };

    emailjs
        .send(
            "service_2e82u3q",
            "template_gayrqyf",
            templateParams,
            "TirZZX9yuOh2KU_LC"
        )
        .then((response) => {
            console.log("Email enviado!", response.status, response.text);
            setMensagemSucesso("Encomenda enviada com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao enviar email:", error);
        });
}

/**
 * Função EXTRA para enviar email de CONTACTOS / RECLAMAÇÕES
 * (podes usar na tua página contactos.html)
 */
export function enviarContacto(formData, setMensagemSucesso) {
    const templateParams = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        motivo: formData.motivo,
        mensagem: formData.mensagem,
    };

    emailjs
        .send(
            "service_2e82u3q",
            "template_7w6uazr",
            templateParams,
            "TirZZX9yuOh2KU_LC"
        )
        .then((response) => {
            console.log("Contacto enviado!", response.status, response.text);
            setMensagemSucesso("Mensagem enviada com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao enviar contacto:", error);
        });
}

