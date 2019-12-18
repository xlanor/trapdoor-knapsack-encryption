
 import{
    UPDATE_SIMULATOR_PRIVATE_KEY,
    UPDATE_SIMULATOR_PRIVATE_KEY_VALID,
    UPDATE_SIMULATOR_MODULO,
    UPDATE_SIMULATOR_MODULO_VALID,
    UPDATE_SIMULATOR_PUBLIC_KEY,
    UPDATE_SIMULATOR_GEN_KEY_COMPLETED,
    UPDATE_SIMULATOR_TEXT_TO_ENC,
    UPDATE_SIMULATOR_TEXT_TO_ENC_VALID,
    UPDATE_SIMULATOR_TEXT_TO_DECRYPT,
    UPDATE_SIMULATOR_DECRYPTED_TEXT,
 } from '../constants';
 
  
const initialState = {
    privateKey: "",
    privateKeyValid: false,
    modulus: "",
    modulusValid: false,
    publicKey: "",
    genKeyCompleted: false,
    textToEncrypt: "",
    textToDecrypt: "",
    decryptedText: "",
}




const simulatorReducer = (state = initialState, action ) => {
        switch(action.type){
            /* If we update the private key, everything else becomes invalid. */
            case UPDATE_SIMULATOR_PRIVATE_KEY:
                return {
                    ...state,
                    privateKey: action.payload,
                    privateKeyValid: true,
                    /* If we update the private key, everything else becomes invalid. */
                    modulus: "",
                    modulusValid: false,
                    publicKey: "",
                    genKeyCompleted: false,
                }
            case UPDATE_SIMULATOR_PRIVATE_KEY_VALID:
                if (!action.payload) {// pivate key is invalid
                    return {
                        ...state,
                        privateKey: "", // resets the private key.
                        privateKeyValid: false,
                        /* If we update the private key, everything else becomes invalid. */
                        modulus: "",
                        modulusValid: false,
                        publicKey: "",
                        genKeyCompleted: false,

                    }
                }else{
                    return { // private key is valid.
                        ...state,
                        privateKeyValid: true,
                    }

                }
            case UPDATE_SIMULATOR_MODULO:
                return {
                    ... state,
                    modulus: action.payload,
                    modulusValid: true,
                    publicKey: "",
                    genKeyCompleted: false,
                }
            case UPDATE_SIMULATOR_MODULO_VALID:
                if (!action.payload){
                    // modulo is invalid.
                    return {
                        ...state,
                        modulus: "",
                        modulusValid: false,
                        publicKey: false,
                        genKeyCompleted: false,
                    }
                }else{
                    return {
                        ...state,
                        modulusValid: true,
                    }
                }
            case UPDATE_SIMULATOR_PUBLIC_KEY:
                return {
                    ...state,
                    publicKey: action.payload,
                    genKeyCompleted: true,
                }
            case UPDATE_SIMULATOR_TEXT_TO_ENC:
                return {
                    ...state,
                    textToEncrypt: action.payload,
                }
            case UPDATE_SIMULATOR_TEXT_TO_DECRYPT:
                return {
                    ...state,
                    textToDecrypt: action.payload,
                }
            case UPDATE_SIMULATOR_DECRYPTED_TEXT:
                return {
                    ...state,
                    decryptedText: action.payload,
                }
        }
}
export default simulatorReducer;