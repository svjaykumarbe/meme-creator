import axios from 'axios';

/**
 * Utility for interacting with the OpenAI API.
 * Ensure you have an OpenAI API key set in your environment variables.
 */

// Base URL for OpenAI API
const OPENAI_API_BASE_URL = 'https://api.openai.com/v1';

/**
 * Makes a request to the OpenAI Completion endpoint.
 *
 * @param {string} prompt - The prompt to send to the AI model.
 * @param {string} model - The model to use (default: "text-davinci-003").
 * @param {number} maxTokens - Maximum number of tokens to generate.
 * @param {number} temperature - Sampling temperature for creativity (0-1, higher = more creative).
 * @returns {Promise<string>} - The generated text from OpenAI.
 */
export const generateText = async (
  prompt,
  model = 'text-davinci-003',
  maxTokens = 100,
  temperature = 0.7
) => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OpenAI API key is missing. Set it in your environment variables.');
  }

  try {
    const response = await axios.post(
      `${OPENAI_API_BASE_URL}/completions`,
      {
        model,
        prompt,
        max_tokens: maxTokens,
        temperature,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const { choices } = response.data;
    if (choices && choices.length > 0) {
      return choices[0].text.trim();
    }

    throw new Error('No response received from OpenAI.');
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    throw error;
  }
};

/**
 * Example function to generate a meme caption.
 *
 * @param {string} context - Context or description of the meme image.
 * @returns {Promise<string>} - Generated meme caption.
 */
export const generateMemeCaption = async (context) => {
  const prompt = `You are a creative meme caption generator. Based on the following description of a meme, create a witty and funny caption:\n\nMeme description: ${context}\n\nCaption:`;

  return await generateText(prompt, 'text-davinci-003', 50, 0.9);
};

export default {
  generateText,
  generateMemeCaption,
};