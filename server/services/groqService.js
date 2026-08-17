const completion =
    await groq.chat.completions.create({

        model: "openai/gpt-oss-120b",

        temperature: 0.2,

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "system",
                content:
                    "You are a startup evaluation expert. Always return valid JSON."
            },
            {
                role: "user",
                content: prompt
            }
        ]

    });