const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", function() {

    if(tab.classList.contains("selected")){
      return;
    };

    selectTab(tab)

    showInformation(tab)
  });
});

  function selectTab(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");

    tab.classList.add("selected");
  }

  function showInformation(tab) {
    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected");

    const idElementInformationTab = `information-${tab.id}`

    const informationToShow = document.getElementById(idElementInformationTab);
    informationToShow.classList.add("selected")
  }