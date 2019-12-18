
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
    UPDATE_SIMULATOR_PRIVATE_KEY_SUM,
    UPDATE_SIMULATOR_MULTIPLIER,
    UPDATE_SIMULATOR_MULTIPLIER_VALID,
 } from '../constants';
 
  
const initialState = {
    privateKey: "",
    privateKeySum: 0,
    privateKeyValid: false,
    modulus: "",
    modulusValid: false,
    multiplier: "",
    multiplierValid: false,
    publicKey: [],
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
                        privateKeySum: 0,
                        privateKeyValid: false,
                        /* If we update the private key, everything else becomes invalid. */
                        modulus: "",
                        modulusValid: false,
                        multiplier: "",
                        multiplierValid: false,
                        publicKey: "",
                        genKeyCompleted: false,

                    }
                }else{
                    return { // private key is valid.
                        ...state,
                        privateKeyValid: true,
                    }

                }
            case UPDATE_SIMULATOR_PRIVATE_KEY_SUM:
                return {
                    ...state,
                    privateKeySum: action.payload
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
                        multiplier: "",
                        multiplierValid: false,
                        publicKey: false,
                        genKeyCompleted: false,
                    }
                }else{
                    return {
                        ...state,
                        modulusValid: true,
                    }
                }
            
            case UPDATE_SIMULATOR_MULTIPLIER:
                console.log(`Activating state update with ${action.payload}`)
                return {
                    ...state,
                    multiplier: action.payload,
                    multiplierValid: true,
                    publicKey: false,
                    genKeyCompleted: false,
                }
            case UPDATE_SIMULATOR_MULTIPLIER_VALID:{
                if (!action.payload){
                    // multiplier is valid
                    return {
                        ...state,
                        multiplier: "",
                        multiplierValid: false,
                        publicKey: false,
                        genKeyCompleted: false,
                    }
                }else{
                    return {
                        ...state,
                        multiplierValid: true,
                    }
                }
            }
            case UPDATE_SIMULATOR_PUBLIC_KEY:
                console.log(`Setting pk to ${action.payload}`)
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
            default:
                return state;
        }
}
export default simulatorReducer;