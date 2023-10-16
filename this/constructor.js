function Appointment(aptDate) {
    // write your code here
      this.date = new Date(aptDate)
      this.location = '';
  
  
      this.setLocation  = function(s){
          this.location = s;
      }
  
      this.getLocation  = function(){
          return this.location;
      }
  
      this.toString = function(){
          return `Appointment on ${this.date.toDateString()} at ${this.location}`
      }
  }