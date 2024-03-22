const login = async (req, res) => {
    try{
        const emailCadastrado = "emaillegal@gmail.com";
        const senhaCadastrada = "senhalegal";
        const {email, senha} = req.body;

        if(email != emailCadastrado){
            // return res.status(401).json({error: "Invalid email"});
            return console.log("Invalid email")
        }
        if(senha != senhaCadastrada){
            // return res.status(401).json({error: "Invalid password"});
            return console.log("Invalid password")
        }

        return res.status(200).json({res: "deu certo!!!"});
    }
        catch(error){
            return res.status(500).json({res: "deu algo de errado :("});

        }
}

module.exports = {
 login,

}