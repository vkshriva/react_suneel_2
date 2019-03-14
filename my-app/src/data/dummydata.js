export  var dummyData ={  
    autoSuggestionGrp:[
    'shouldnt'
    ,'worrying'
    ,'simplify'
    ,'tidy'
    ,'shouldntshouldnt'
    ,'yep'
    ,'the'
    ,'lively'
    ,'borrowshouldnt'
    ,'shouldntwhichever'
    ,'swallow'
    ,'ruined'
    ,'firstly'
    ,'interestingly'
    ,'secondly'
    ,'guessing'
    ,'reuse'
    ,'frankly'
    ,'terribly'
    ,'primitive'
    ,'luckily'
    ,'simplicity'
    ,'definite'
    ,'brittle'
    ,'simplification'
    ,'werent'
    ,'confusingly'
  ]} ;


  export const Listofobjs = {
    caselist: [
      {
        id: "1234",
        name: "walmart-tylenol",
        customerquery: {
          id: "g-32e98627-60e9-49c8-9066-ff34ed36ab69",
          rules: [
            {
              id: "r-2b38b2f2-f743-4b6b-9e31-6184221f942f",
              field: "NAT_CHAIN",
              value: "walmart",
              operator: "="
            },
            {
              id: "r-9aaa5cf8-f3ac-48d3-bb66-241981ca7a2a",
              field: "CUSTTYPE",
              value: "PC",
              operator: "null"
            }
          ],
          combinator: "and"
        },
        itemquery: {
          id: "g-d327066a-72af-4f26-bac2-502527607a62",
          rules: [
            {
              id: "r-ce27fed2-12bd-488f-ad26-2144a2da90c9",
              field: "GCN",
              value: "678",
              operator: "="
            },
            {
              id: "r-cbcb0fd6-ca40-446e-a7ea-d3775b43baf1",
              field: "FORM",
              value: "paracetamol",
              operator: "null"
            }
          ],
          combinator: "and"
        },
        startdate: "05/01/2019",
        enddate: "08/01/2019",
        allocation_rule: "90day"
      },
      {
        id: "12345",
        name: "cvs-tylenol",
        customerquery: {
          id: "g-32e98627-60e9-49c8-9066-ff34ed36ab69",
          rules: [
            {
              id: "r-2b38b2f2-f743-4b6b-9e31-6184221f942f",
              field: "NAT_CHAIN",
              value: "cvs",
              operator: "="
            },
            {
              id: "r-9aaa5cf8-f3ac-48d3-bb66-241981ca7a2a",
              field: "CUSTTYPE",
              value: "PC",
              operator: "null"
            }
          ],
          combinator: "and"
        },
        itemquery: {
          id: "g-d327066a-72af-4f26-bac2-502527607a62",
          rules: [
            {
              id: "r-ce27fed2-12bd-488f-ad26-2144a2da90c9",
              field: "GCN",
              value: "678",
              operator: "="
            }
            ,
            {
              id: "r-cbcb0fd6-ca40-446e-a7ea-d3775b43baf1",
              field: "FORM",
              value: "paracetamol",
              operator: "null"
            }
          ],
          combinator: "and"
        },
        startdate: "06/01/2019",
        enddate: "08/01/2019",
        allocation_rule: "60day"
      }
    ]
  };