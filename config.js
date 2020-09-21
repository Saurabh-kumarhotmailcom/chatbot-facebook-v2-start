module.exports = {
    FB_PAGE_TOKEN: process.env.FB_PAGE_TOKEN,
    FB_VERIFY_TOKEN: process.env.FB_VERIFY_TOKEN,
    FB_APP_SECRET: process.env.FB_APP_SECRET,
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    DF_LANGUAGE_CODE: process.env.DF_LANGUAGE_CODE,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCr9X5Ag4IFkLyM\n6SHvrejhV+kouYj6fk2GR2JEfH38bSujJ7ZqMyvaZievJ1dSqTO8x6fbkPRRD4lF\nI4sBrqFermWv15BdVBtgyA9ZGI/Havb4sxa631mxgwyTcOswJJFJ1mHam906zKpz\nz8TGWZ6BkPCJK3FhwBMjO7+3qTdDBGovnXxBfvFEIj+yiowked9o0ycH2J8pFTaI\nMcVCAYgIzlfqEGRTbEfPKa82cidqQ7nvAusrX93znYs/vtt8556GHZpJPcH5KkDx\n3Nu8rr75QlpSHLZgqV5Di96RyChH1bd8HNQ73U2BHKw+KDtcOZ5T0g3tWlkSx4BH\nRXFB8yp3AgMBAAECggEAQv1JKOLSdU6UVaTAxrmOXrM7rtTQqx0nIGeQvbNt9Tem\nZ1IiOy8iJ1vim9aMqzQlZqa1GtFWjHmr9VZKYeZhERyJmr40jFcmr0ZgzEnIQVzH\nR82kzjoSnBe8f3fe94tXWld9GYfc4Ho48RMAynDBUiJfwmA9NGJ6UiCFqIvwbleX\nMAcfh1C5VTq4uIjIjjhgJXnGdp+aOkGynAIwQiUhJGEykPXtf45NEr14HOhiPpEo\nevCClYVe5aESbw/xIzJKt+MapBbZ5DrCzg6mNSiIp77LQQQBsarR4WNVilGqJzhM\nkeAW9MBYmY841WAJB9/2I2OcO/o/JOrNrqy+6upV8QKBgQDekJUkX3y6hlajy6/s\nnY/RQ6uy55d70d4XTYIDJ1MDmkXr3SUW1e4mfSwBmz7oxLUiwLg/cHGDVJ1XJCVE\ngEhPy/Mj1lNougvSZcLTMrRQekdoY2FzLbMSHv0ayEuIwvIE/l66UoRG9L9fFLN7\nSGq+n6GMGWeCDadQ/105bfjzTwKBgQDFyrULD7gl0PTZxBXSYlD6n77NWj11qfqp\nDbzH2Kt/DVuKqVDU7jA+csitQGP0WNDtyxWaQLZMeRQyYb7JvgJdiQuVjQA1LbSW\nEMt4DSyoq4aci1dLw/KfPqVWGtqkTZsdG1c8U2uurrLjXu523GYZ7/P836pVUZzG\nRehNaNssWQKBgDEj7yoWwy1T1/FWWcN+jnB/5nsb00CNd+HhRSF5H0UeXO3U6AmA\ntpJc9MhuBJfURsIjlwq6wvViS1MgMfJL+KtVtptlCQmIem+79CY5fcJ/HSEZQDz0\nDCOmH/A35SWPFWyw1S2CZp5cD5zorzA7LwZjrIGIYmg+p4CkwWqas2rVAoGBAJUq\nX8j8zOLwKIhGwjJM5UdtzAawpKMlUx3Fd3a8J/IEj+IN+SDslUOzazaF1hwEE2US\ngLM5VIJt2dZ5MtqQytXhsfPSR7LTSlrWRay/Osvlt/o9d9Ny7no8U5KRZAz/Xhjg\ncrTTMOWnaM/i2zKW2wV6mmY+BAaeKv644A3pI0nZAoGBAMit5O+0z0gH8pnFetLx\neKsIjWmW4NG4JT8eh1r1b1v2+UBO9unzjUmsghzw8oSAiHYVgnsWGmDLORZ4fs8r\no+CZnRijd8df5kLovUH4+VCxi4rCnhN2UvSQdetVgJTePU3wJPQAD0bPY8cp42Uw\nV0LNOkJhFOniNaynTP5Byfo5\n-----END PRIVATE KEY-----\n',
    SENGRID_API_KEY: process.env.SENGRID_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_TO: process.env.EMAIL_TO,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    PG_CONFIG: {
        user: process.env.PG_CONFIG_USER,
        database: process.env.PG_CONFIG_DATABASE,
        password: process.env.PG_CONFIG_PASSWORD,
        host: process.env.PG_CONFIG_HOST,
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000,
    }
};