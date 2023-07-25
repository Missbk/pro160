AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    /**alumno */
    this.handleClickEvents();
  },

  handleClickEvents:function(){
    /**alumno */
    //Eventos"click del cursor"
    
      if (state==="places-list"){
        const id=this.el.getAttribute("id");
        const placesId=[
          "taj-mahal",
          "budapest",
          "new-york-city",
          "eiffel-tower"
        ];
        if(placesId.includes(id)){
          placesContainer.setAttribute("tour",{
            state:"view",
            selectedCard:id
        });
      }
    }

    if (state==="view"){
      this.handleViewState();
    }
    if (state ==="change-view"){
      this.handleViewState();
    }
     })

  },
/******/
/****160 */
handleViewState:function(){
  const el =this.el;
  const id=el.getAttribute("id");
  const placesContainer=document.querySelector("places-container");
  const {selectedItemId}=placesContainer.getAttribute("cursor-listener");
  const sideViewPlacesId=["place-1","place-2", "place-3", "place-4"];

  
        
  }
},
/********************************** */

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Evento 'mouseenter' del cursor.
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Evento 'mouseleave' del cursor.
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});
