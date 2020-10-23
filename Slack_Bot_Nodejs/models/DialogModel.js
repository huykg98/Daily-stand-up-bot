class Dialog {
    constructor(channel_id, name, label, type, subtype, placeholder, optional, max_length, min_length, hint, value, title) {
        // this.dialog_id = dialog_id;
        this.channel_id = channel_id;
        this.name = name;
        this.label = label;
        this.type = type;
        this.subtype = subtype;
        this.placeholder = placeholder;
        this.optional = optional;
        this.max_length = max_length;
        this.min_length = min_length;
        this.hint = hint;
        this.value = value;
        this.title = title;
      }

    //   get dialog_id(){
    //      return this.dialog_id
    //   }

    //   set dialog_id(dialog_id){
    //       this.dialog_id = dialog_id
    //   }

      get channel_id(){
        return this.channel_id
     }

     set channel_id(channel_id){
         this.channel_id = channel_id
     }

     get name(){
        return this.name
     }

     set name(name){
         this.name = name
     }

     get label(){
        return this.label
     }

     set label(label){
         this.label = label
     }

     get type(){
        return this.type
     }

     set type(type){
         this.type = type
     }

     get subtype(){
        return this.subtype
     }

     set subtype(subtype){
         this.subtype = subtype
     }

     get placeholder(){
        return this.placeholder
     }

     set placeholder(placeholder){
         this.placeholder = placeholder
     }

     get optional(){
        return this.optional
     }

     set optional(optional){
         this.optional = optional
     }

     get max_length(){
        return this.max_length
     }

     set max_length(max_length){
         this.max_length = max_length
     }

     get min_length(){
        return this.min_length
     }

     set min_length(min_length){
         this.min_length = min_length
     }

     get hint(){
        return this.hint
     }

     set hint(hint){
         this.hint = hint
     }

     get value(){
        return this.value
     }

     set value(value){
         this.value = value
     }

     get title(){
        return this.title
     }

     set title(title){
         this.title = title
     }
    
}



