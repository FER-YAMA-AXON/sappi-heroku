let required = (propertyType) =>{
  return v => v && v.length > 0 || 'El campo requiere un ' + propertyType
}
let requiredselect = (propertyType) =>{
  return v => !!v ||  'El campo requiere un ' + propertyType
}
let minLength = (propertyType, minLength) =>{
  return v => v && v.length >= minLength || `${propertyType} al menos debe de ser ${minLength} caracteres`
}
let minName = (propertyType, minName) =>{
  return v => v && v.length >= minName || ` al menos debe de ser ${propertyType} y apellido`
}
let maxLength = (propertyType, maxLength) =>{
  return v => v && v.length <= maxLength || `${propertyType} debe ser menos de ${maxLength} caracteres`
}
let emailFormat = () =>{
  let regex = /.+@.+\..+/
  return v => v && regex.test(v) || "ingresa un email valido"
}
export default{
  required,
  minLength,
  maxLength,
  emailFormat,
  minName,
  requiredselect,
}
