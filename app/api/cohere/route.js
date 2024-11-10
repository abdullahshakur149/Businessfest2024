import { NextResponse } from 'next/server';

export async function POST(request) {
  const { description } = await request.json(); // Parse the JSON body

  try {
    const kohereResponse = await fetch('https://api.cohere.com/v2/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'command-r-plus-08-2024',
        messages: [
          {
            role: 'system',
            content: 'You are an evaluator for business fest ideas. Your task is to decide whether the idea should be approved or rejected with a simple response. If approved, provide suggestions for improvement. If rejected, explain why.',
          },
          {
            role: 'user',
            content: `Evaluate this business fest idea and give a decision with suggestions if approved: ${description}`,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await kohereResponse.json();

    // Log the response for debugging
    console.log('Cohere API Response:', data);

    // Check if the response contains valid choices
    if (data && data.message && Array.isArray(data.message.content)) {
      // Extract the content from the array
      const responseContent = data.message.content[0].text.trim();
      

      // Return the response content directly
      return NextResponse.json({
        response: responseContent,  success: true || 'No clear decision from the model.',
      });
    } else {
      // If no content or empty array, return a fallback message
      return NextResponse.json({
        response: 'No meaningful response from the model.',
      });
    }
  } catch (error) {
    console.error('Error connecting to Cohere API:', error);
    return NextResponse.json({ error: 'Failed to get response from Cohere API' }, { status: 500 });
  }
}
