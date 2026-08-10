const completion = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    temperature: 0.2,

    max_tokens: 3500,

    response_format: {
        type: "json_object"
    },

    messages: [
        {
            role: "user",
            content: prompt
        }
    ]

});