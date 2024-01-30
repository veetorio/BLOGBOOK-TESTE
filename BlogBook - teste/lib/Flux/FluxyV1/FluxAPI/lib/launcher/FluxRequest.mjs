 
export default class FluxRequest{
  "url-External";
  "header-External"= {
    headers: { "Content-Type": "application/json", 
    Accept: "application/json" },
    method: "GET",
    body : null

  };

  constructor(url) {
      this["url-External"] = url;
    }
    


  async fluxStart(...configs){
    configs.forEach(set => {
      switch(typeof set){
        case "string" : 
            this["header-External"].method = set
            break
        case "object" : 
            this["header-External"].body = JSON.stringify(set)
            break
        default :
          this["header-External"].body = null
          this["header-External"].method = "GET"
      }
    })
    return await fetch(this["url-External"],this["header-External"]).then(promise => promise.json());
  }
  statusRequest(){
    const status = {
        url : this["url-External"],
        header : this["header-External"]
      }
      return status;

  }
  
}
