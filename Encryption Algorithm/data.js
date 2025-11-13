const quizData = {
    courseTitle: "Encryption Algorithm",
    'lec-1': {
        title: "lec 1",
        data: [
            // --- Cryptography ---
            { type: 'mcq', q: "What is cryptography?", options: ["a) The process of compressing data", "b) The process of hiding or coding information", "c) The process of storing passwords", "d) The process of deleting sensitive data"], correct: 1 },
            { type: 'mcq', q: "Which of the following is a modern application of cryptography?", options: ["a) Ancient messages only", "b) Bank cards, computer passwords, e-commerce", "c) Only text messaging", "d) Storing plain text in files"], correct: 1 },
            { type: 'mcq', q: "Cryptography ensures that the decryption process is known to:", options: ["a) Only the sender", "b) Both sender and receiver", "c) Only hackers", "d) Only the government"], correct: 1 },

            // --- Why Cryptography Is Essential ---
            { type: 'mcq', q: "Which of the following is NOT a key reason for using cryptography?", options: ["a) Confidentiality", "b) Integrity", "c) Entertainment", "d) Authentication"], correct: 2 },
            { type: 'mcq', q: "What does non-repudiation mean in cryptography?", options: ["a) Preventing unauthorized reading", "b) Preventing someone from denying their actions", "c) Encrypting only passwords", "d) Storing ciphertext permanently"], correct: 1 },
            { type: 'mcq', q: "Cryptography helps with compliance by:", options: ["a) Breaking encryption keys", "b) Supporting legal accountability and regulations", "c) Making data public", "d) Avoiding encryption entirely"], correct: 1 },

            // --- Encryption ---
            { type: 'mcq', q: "Encryption converts plaintext into:", options: ["a) Plaintext again", "b) Ciphertext", "c) Digital signature", "d) Binary only"], correct: 1 },
            { type: 'mcq', q: "Which of these is an example of simple encryption?", options: ["a) Caesar Cipher (shift letters)", "b) RSA algorithm", "c) AES algorithm", "d) SHA hashing"], correct: 0 },
            { type: 'mcq', q: "In symmetric encryption, the key used is:", options: ["a) Public only", "b) Private only", "c) The same for encryption and decryption", "d) Different for encryption and decryption"], correct: 2 },
            { type: 'mcq', q: "In asymmetric encryption, we use:", options: ["a) No key", "b) A single shared key", "c) Public and private key pairs", "d) Random password only"], correct: 2 },

            // --- Importance and Uses of Encryption ---
            { type: 'mcq', q: "Why is encryption crucial in modern life?", options: ["a) It makes data shorter", "b) It prevents data breaches and tampering", "c) It increases file size", "d) It removes data permanently"], correct: 1 },
            { type: 'mcq', q: "Which of the following is a use case of encryption?", options: ["a) Cloud storage security", "b) Online banking", "c) Messaging apps", "d) All of the above"], correct: 3 },

            // --- Decryption ---
            { type: 'mcq', q: "Decryption is the process of converting:", options: ["a) Ciphertext → Plaintext", "b) Plaintext → Ciphertext", "c) Passwords → Keys", "d) Hash → Plaintext"], correct: 0 },
            { type: 'mcq', q: "What is needed to decrypt encrypted data?", options: ["a) The sender’s name only", "b) The decryption key and algorithm", "c) A password manager", "d) Random guessing"], correct: 1 },
            { type: 'mcq', q: "Which of the following is a component of decryption?", options: ["a) Hash value", "b) Ciphertext", "c) Digital watermark", "d) File system"], correct: 1 },

            // --- Cipher ---
            { type: 'mcq', q: "A cipher is best defined as:", options: ["a) A storage device", "b) An encryption/decryption algorithm", "c) A password manager", "d) A type of hash function"], correct: 1 },
            { type: 'mcq', q: "Which of these is a classical cipher?", options: ["a) AES", "b) RSA", "c) Substitution and Transposition", "d) Blowfish"], correct: 2 },
            { type: 'mcq', q: "Which of these is a modern cipher?", options: ["a) Caesar Cipher", "b) Vigenère Cipher", "c) AES / RSA / Blowfish", "d) Substitution Cipher"], correct: 2 },
            { type: 'mcq', q: "Block ciphers work on:", options: ["a) Fixed-size blocks of data", "b) Infinite data", "c) Passwords only", "d) Metadata only"], correct: 0 },
            { type: 'mcq', q: "Stream ciphers work on:", options: ["a) Fixed-size blocks", "b) Continuous streams of data", "c) Only binary numbers", "d) Random keys only"], correct: 1 },

            // --- Caesar Cipher ---
            { type: 'mcq', q: "The Caesar Cipher was named after:", options: ["a) Alexander the Great", "b) Julius Caesar", "c) Napoleon", "d) Aristotle"], correct: 1 },
            { type: 'mcq', q: "The Caesar Cipher works by:", options: ["a) Randomizing letters", "b) Shifting letters of the alphabet by a fixed number", "c) Mixing block ciphers", "d) Using public and private keys"], correct: 1 },
            { type: 'mcq', q: "If the Caesar Cipher shift = 3, then A → ?", options: ["a) B", "b) C", "c) D", "d) E"], correct: 2 },
            { type: 'mcq', q: "Why is the Caesar Cipher important in cryptography history?", options: ["a) It was the first practical method of encryption", "b) It is unbreakable today", "c) It is used in banking systems", "d) It is faster than AES"], correct: 0 },
        ]
    }
};
