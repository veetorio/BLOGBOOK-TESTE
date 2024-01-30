
import { UserObject } from "./PostObject/UserObject.mjs";
import { Simplifier } from "./util/Simplifier.mjs";

// const obj = new UserObject('','','')
const simplifier = new Simplifier();
const layoutElements = simplifier.elementCollector('element1','element2')
const lates = new FluxRequest('http://localhost:8080/usuarios')

const response = await lates.fluxStart()

layoutElements[0].style.background  =`url(${response[1].pathProfile}) no-repeat`
layoutElements[0].style.backgroundSize = 'cover'
layoutElements[1].style.background = `url(${await response[1].pathBanner})`

console.log(response[0])



