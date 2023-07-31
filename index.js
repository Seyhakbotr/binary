function convert() {
    var input = document.getElementById("input").value;
    var conversion = document.getElementById("conversion").value;
    var output = 0;
    switch(conversion) {
      case "base2tobase10":
        output = parseInt(input, 2);
        break;
      case "base4tobase10":
        output = parseInt(input, 4);
        break;
      case "base6tobase10":
          output = parseInt(input,6);
          break;
      case "base8tobase10":
          output = parseInt(input,8);
          break;
      case "base16tobase10":
        output = parseInt(input, 16);
        break;
      default:
        output = "Invalid conversion";
    }
    document.getElementById("output").value = output ;
  }

function convertDeci() {
    var input2 = document.getElementById("input2").value;
    var conversion2 = document.getElementById("conversion2").value;
    var output2 = 0;
    switch(conversion2) {
      case "base10tobase2":
      output2 = Number(input2).toString(2);
        break;
      case "base10tobase4":
      output2 = Number(input2).toString(4);
        break;
      case "base10tobase6":
      output2 = Number(input2).toString(6);
          break;
      case "base10tobase8":
      output2 = Number(input2).toString(8);
          break;
      case "base10tobase16":
      output2 = Number(input2).toString(16);
        break;
      default:
        output2 = "Invalid conversion";
    }
    document.getElementById("outputDeci").value = output2;
}