import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

async function classificarChamado(mensagemCliente) {
  const prompt = `
  Você é um assistente de suporte de uma loja online.
  Sua tarefa é ler a mensagem do cliente e responder APENAS no formato:
  - Categoria: [Dúvida, Reclamação ou Elogio]
  - Urgência: [Baixa, Média ou Alta]
  - Resposta Sugerida: [Uma resposta cordial de até 2 frases]

  Mensagem do cliente: "${mensagemCliente}"
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: prompt,
  });

  console.log(response.text);
}

//classificarChamado("Meu pedido #1029 ainda não chegou e o prazo venceu ontem!");
// Teste de elogio:
//classificarChamado("Amei a embalagem e o produto chegou super rápido, muito obrigado!");

// Teste de dúvida:
classificarChamado("Vocês entregam aos sábados em Porto Alegre?");