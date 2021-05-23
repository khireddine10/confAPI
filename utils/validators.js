let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
let facebookRegex = /^((https|http)?:\/\/)?(www\.)?(facebook|fb).com\/(profile.php\?id\=[0-9]{15}|[a-zA-Z0-9(\.\?)?]+)?/
let instagramRegex = /^((https|http)?:\/\/)?(www\.)?instagram.com\/[a-zA-Z0-9(\.\?)?]*/;
let twitterRegex = /^((https|http)?:\/\/)?(www\.)?(twitter).com\/([a-zA-Z0-9(\.\?)?]+)+?/;
let linkedinRegex = /^((https|http)?:\/\/)?(www\.)?(linkedin).com\/company\/([a-zA-Z0-9(\.\?)?]+)+?\/*/

module.exports = {emailRegex,phoneRegex,facebookRegex,
                 instagramRegex,twitterRegex,linkedinRegex};