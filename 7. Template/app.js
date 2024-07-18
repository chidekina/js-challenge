function template (obj, string){

    for (prop in obj){
      string = string.replace(prop,obj[prop]);
    }
    string = string.replaceAll(':', '')
    return string;
  }
