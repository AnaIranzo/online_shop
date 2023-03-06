const mongoose = require('mongoose');


const objectSchema = {
    
    company_name: { 
        type: String, 
        required: true ,
        
    },
    CIF: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    }
};
// Crear el esquema
const providersSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('Providers', providersSchema);//creo una coleccion nueva en mongo que se llama Providers importante mayuscula

module.exports = Provider;