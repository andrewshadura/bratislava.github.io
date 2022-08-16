"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[182],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),y=c(t),m=a,d=y["".concat(p,".").concat(m)]||y[m]||u[m]||s;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={},i="Card Web Pay",o={unversionedId:"technologies/NestJS/CardWebPay",id:"technologies/NestJS/CardWebPay",title:"Card Web Pay",description:"GP webpay",source:"@site/docs/technologies/NestJS/CardWebPay.md",sourceDirName:"technologies/NestJS",slug:"/technologies/NestJS/CardWebPay",permalink:"/docs/technologies/NestJS/CardWebPay",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/technologies/NestJS/CardWebPay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/technologies/NestJS/Authentication"},next:{title:"Controllers",permalink:"/docs/technologies/NestJS/Controllers"}},p={},c=[{value:"GP webpay",id:"gp-webpay",level:2}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"card-web-pay"},"Card Web Pay"),(0,a.kt)("h2",{id:"gp-webpay"},"GP webpay"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create secret private key from GP webpay and dowlnoad it also download public key. Documentation is ",(0,a.kt)("a",{parentName:"p",href:"https://www.gpwebpay.cz/downloads/GP_webpay_HTTP.pdf"},"here"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create new service into ",(0,a.kt)("inlineCode",{parentName:"p"},"services/vendors/gp-webpay.ts")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// TODO rewrite this in a way where it can be shared between projects (that's way I'm not making it a service for now)\n\nimport * as formurlencoded from 'form-urlencoded';\nimport { promises, readFileSync } from 'fs';\nimport { createSign, createVerify } from 'crypto';\n\nconst ALGORITHM = 'SHA1';\nconst SIGNATURE_FORMAT = 'base64';\n\nexport enum PAYMENT_OPERATION {\n  CREATE_ORDER = 'CREATE_ORDER', // Card payment\n  CARD_VERIFICATION = 'CARD_VERIFICATION', // Card verification\n  FINALIZE_ORDER = 'FINALIZE_ORDER', // MasterPass digital wallet\n}\n\n// TODO for this to work with deployment, it either needs to be configured using env or done otherwise sensibly\n// if we want to store prod keys elsewhere change how this is handled\nconst GP_WEBPAY_PRIVATE_KEY_PATH = `./apps/nest/parking-backend/src/app/public/webpay-keys/${process.env.GP_WEBPAY_PRIVATE_KEY_FILE_PVK}`;\nconst GP_WEBPAY_PUBLIC_KEY_PATH = `./apps/nest/parking-backend/src/app/public/webpay-keys/${process.env.GP_WEBPAY_PRIVATE_KEY_FILE_PUB}`;\n\nconst createSignature = (\n  data: string,\n  privateKey: Buffer,\n  privateKeyPassphrase: string\n): string => {\n  const signer = createSign(ALGORITHM);\n  signer.update(data);\n  signer.end();\n  return signer.sign(\n    { key: privateKey, passphrase: privateKeyPassphrase },\n    SIGNATURE_FORMAT\n  );\n};\n\nconst verifySignature = (\n  data: string,\n  signature: string,\n  publicKey: Buffer\n): boolean => {\n  const verifier = createVerify(ALGORITHM);\n  verifier.update(data);\n  verifier.end();\n  const result = verifier.verify(publicKey, signature, SIGNATURE_FORMAT);\n  // console.log(`Signature verified: ${result}`)\n  return result;\n};\n\ntype GPWebpayHttpRequest = {\n  MERCHANTNUMBER: string;\n  OPERATION: string;\n  ORDERNUMBER: number;\n  AMOUNT: number;\n  CURRENCY?: number;\n  DEPOSITFLAG: number;\n  MERORDERNUM?: number;\n  URL: string;\n  DESCRIPTION?: string;\n  MD?: string;\n  USERPARAM1?: string;\n  PAYMETHOD?: string;\n  DISABLEPAYMETHOD?: string;\n  PAYMETHODS?: string;\n  EMAIL?: string;\n  REFERENCENUMBER?: string;\n  ADDINFO?: string;\n  DIGEST?: string;\n};\n\ntype GPWebpayHttpResponse = {\n  OPERATION: string;\n  ORDERNUMBER: number;\n  MERORDERNUM?: number;\n  MD?: string;\n  PRCODE: string;\n  SRCODE: string;\n  RESULTTEXT?: string;\n  USERPARAM1?: string;\n  ADDINFO?: string;\n  TOKEN?: string;\n  EXPIRY?: string;\n  ACSRES?: string;\n  ACCODE?: string;\n  PANPATTERN?: string;\n  DAYTOCAPTURE?: string;\n  TOKENREGSTATUS?: string;\n  ACRC?: string;\n  RRN?: string;\n  PAR?: string;\n  TRACEID?: string;\n  DIGEST: string;\n  DIGEST1: string;\n};\n\nexport const checkPaymentKeys = () => {\n  try {\n    // const publicKey = readFileSync(webpayConfig.publicKeyPath)\n    const privateKey = readFileSync(GP_WEBPAY_PRIVATE_KEY_PATH);\n    const gpPublicKey = readFileSync(GP_WEBPAY_PUBLIC_KEY_PATH);\n\n    if (\n      // publicKey.length === 0 ||\n      privateKey.length === 0 ||\n      gpPublicKey.length === 0\n    ) {\n      throw new Error('Empty key files');\n    }\n\n    if (!process.env.GP_WEBPAY_PRIVATE_KEY_PASSWORD) {\n      throw new Error('Empty private key password');\n    }\n\n    if (!process.env.GP_WEBPAY_MERCHANT_NUMBER) {\n      throw new Error('Empty merchant number');\n    }\n  } catch (err) {\n    console.log(err);\n    return false;\n  }\n  return true;\n};\n\nconst createRequestSignatureString = (\n  paymentObject: GPWebpayHttpRequest\n): string => {\n  // DO NOT CHANGE ORDER OF PARAMS\n  let data: string;\n  data = `${paymentObject.MERCHANTNUMBER}|${paymentObject.OPERATION}|${paymentObject.ORDERNUMBER}|${paymentObject.AMOUNT}`;\n  data += paymentObject.CURRENCY ? `|${paymentObject.CURRENCY}` : '';\n  data += paymentObject.DEPOSITFLAG ? `|${paymentObject.DEPOSITFLAG}` : '';\n  data += paymentObject.URL ? `|${paymentObject.URL}` : '';\n  data += paymentObject.USERPARAM1 ? `|${paymentObject.USERPARAM1}` : '';\n  return data;\n};\n\n// In case of DIGEST1 verification use withMerchantNumber = true\nconst createResponseSignatureString = (\n  responseObject: GPWebpayHttpResponse,\n  withMerchantNumber = false\n): string => {\n  // DO NOT CHANGE ORDER OF PARAMS\n  let data: string;\n  data = `${responseObject.OPERATION}`;\n  data += `|${responseObject.ORDERNUMBER}`;\n  data += responseObject.MERORDERNUM ? `|${responseObject.MERORDERNUM}` : '';\n  data += responseObject.MD ? `|${responseObject.MD}` : '';\n  data += `|${responseObject.PRCODE}`;\n  data += `|${responseObject.SRCODE}`;\n  data += responseObject.RESULTTEXT ? `|${responseObject.RESULTTEXT}` : '';\n  data += responseObject.USERPARAM1 ? `|${responseObject.USERPARAM1}` : '';\n  data += responseObject.ADDINFO ? `|${responseObject.ADDINFO}` : '';\n  data += responseObject.TOKEN ? `|${responseObject.TOKEN}` : '';\n  data += responseObject.EXPIRY ? `|${responseObject.EXPIRY}` : '';\n  data += responseObject.ACSRES ? `|${responseObject.ACSRES}` : '';\n  data += responseObject.ACCODE ? `|${responseObject.ACCODE}` : '';\n  data += responseObject.PANPATTERN ? `|${responseObject.PANPATTERN}` : '';\n  data += responseObject.DAYTOCAPTURE\n    ? `|${responseObject.DAYTOCAPTURE}`\n    : '';\n  data += responseObject.TOKENREGSTATUS\n    ? `|${responseObject.TOKENREGSTATUS}`\n    : '';\n  data += responseObject.ACRC ? `|${responseObject.ACRC}` : '';\n  data += responseObject.RRN ? `|${responseObject.RRN}` : '';\n  data += responseObject.PAR ? `|${responseObject.PAR}` : '';\n  data += responseObject.TRACEID ? `|${responseObject.TRACEID}` : '';\n  data += withMerchantNumber\n    ? `|${process.env.GP_WEBPAY_MERCHANT_NUMBER}`\n    : '';\n  return data;\n};\n\nconst signData = async (paymentObject: GPWebpayHttpRequest) => {\n  const privateKeyPassword = process.env.GP_WEBPAY_PRIVATE_KEY_PASSWORD;\n  if (!privateKeyPassword)\n    throw new Error('Missing GP_WEBPAY_PRIVATE_KEY_PASSWORD env var');\n  const dataToSign = createRequestSignatureString(paymentObject);\n  // const publicKey = await promises.readFile(webpayConfig.publicKeyPath)\n  const privateKey = await promises.readFile(GP_WEBPAY_PRIVATE_KEY_PATH);\n  return createSignature(dataToSign, privateKey, privateKeyPassword);\n  // self-verify signature\n  // if (verifySignature(dataToSign, signature, publicKey) === false) {\n  //    throw new Error('Problem with verifying signature, check payment keys.')\n  // }\n};\n\nexport const verifyPaymentSignature = async (\n  paymentResponse: GPWebpayHttpResponse\n) => {\n  const data = createResponseSignatureString(paymentResponse);\n  const dataWithMerchantNumber = createResponseSignatureString(\n    paymentResponse,\n    true\n  );\n  const publicKey = await promises.readFile(GP_WEBPAY_PUBLIC_KEY_PATH);\n  return (\n    verifySignature(data, paymentResponse.DIGEST, publicKey) &&\n    verifySignature(\n      dataWithMerchantNumber,\n      paymentResponse.DIGEST1,\n      publicKey\n    )\n  );\n};\n\nexport const verifyPaymentResult = (paymentResponse: GPWebpayHttpResponse) =>\n  // AK PRCODE && SRCODE === 0 => PLATBA PREBEHLA V PORIADKU\n  parseInt(paymentResponse.PRCODE, 10) === 0 &&\n  parseInt(paymentResponse.SRCODE, 10) === 0;\n\ntype CreatePaymentParams = {\n  orderNumber: number;\n  amountInCents: number;\n  transactionId: string;\n};\n\nexport const createPayment = async ({\n  orderNumber,\n  amountInCents,\n  transactionId,\n}: CreatePaymentParams) => {\n  const merchantNumber = process.env.GP_WEBPAY_MERCHANT_NUMBER;\n  if (!merchantNumber)\n    throw new Error('Missing GP_WEBPAY_MERCHANT_NUMBER env var');\n  const paymentObject: GPWebpayHttpRequest = {\n    MERCHANTNUMBER: merchantNumber,\n    OPERATION: PAYMENT_OPERATION.CREATE_ORDER,\n    ORDERNUMBER: orderNumber, // must be unique\n    AMOUNT: amountInCents,\n    CURRENCY: Number(process.env.GP_WEBPAY_CURRENCY), // num code based on ISO 4217\n    // TODO check below, whether we can't (or whether we should) work with 0 as well\n    DEPOSITFLAG: 1, // 1 - Require immediate payment | 0 - Do not require immediate payment\n    URL: `${process.env.GP_WEBPAY_CLIENT_APP_URL}/api-mpa/payment-response-redirect/${transactionId}`, // BE URL where will result be sent\n  };\n\n  const signedObject: GPWebpayHttpRequest = {\n    ...paymentObject,\n    DIGEST: await signData(paymentObject),\n  };\n\n  return {\n    url: process.env.GP_WEBPAY_HTTP_API_URL,\n    data: signedObject,\n    dataToSign: createRequestSignatureString(paymentObject),\n    formurlencoded: formurlencoded(signedObject, { ignorenull: true }),\n  };\n};\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create endpoints into ",(0,a.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," for:"),(0,a.kt)("p",{parentName:"li"},"3.1) send request into GP webpay"),(0,a.kt)("p",{parentName:"li"},"3.2) get data from GP and check if payment was successful"),(0,a.kt)("p",{parentName:"li"},"3.3) redirect from check payment to payment was correct or payment failed"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Get('payment-gateway-redirect/:orderNumber')\n@Redirect('www.TODO-what-to-put-here.com', 302)\nasync paymentGatewayRedirect(@Param('orderNumber') orderNumber: string) {\n  // TODO that orderNumber is an integer might get validated via pipe ?\n  // TODO validate that such order was previously created in db\n  const { url, formurlencoded } = await createPayment({\n    orderNumber: Number.parseInt(orderNumber),\n    amountInCents: 100,\n    transactionId: '123',\n  });\n  // const result = await this.appService.ticketPayment(data, { orderNumber });\n  return { url: `${url}?${formurlencoded}` };\n}\n\n@Get('payment-response-redirect/:id')\n@Redirect('/api-mpa/payment-success', 302)\nasync paymentResponseRedirect(\n  @Request() req: IncomingMessage,\n  @Param('id') id: string\n) {\n  const result = await this.appTicketService.checkCardPayment(id, req);\n  return { url: `${process.env.GP_WEBPAY_CLIENT_APP_URL}/api-mpa/${result}` };\n}\n\n@Get('payment-success')\nasync paymentResponseSuccess() {\n  console.log('success');\n  // we need an url that frontend will recognize as successfully accepted payment\n}\n\n@Get('payment-failure')\nasync paymentResponseFailure() {\n  console.log('failure');\n  // we need an url that frontend will recognize as failed payment that warrants restarting the whole payment process\n}\n\n@Get('parksys-failure')\nasync paymentParksysResponseFailure() {\n  console.log('parksys failure');\n  // we need an url that frontend will recognize as failed payment that warrants restarting the whole payment process\n}\n")))))}u.isMDXComponent=!0}}]);