const config = JSON.parse(process.env.REACT_APP_MPH_CONFIG);
export const configmap = config["attributes"];

export function getAttributes(type) {
  const attributearray = configmap;
  let fieldarray = attributearray
    .map(obj => {
      if (obj["type"] === type) {
        let fieldlabel = obj["name"];
        let fieldname = obj["id"];

        return { name: fieldname, label: fieldlabel };
      } else {
        return null;
      }
    })
    .filter(obj => obj !== null);

  console.log("fieldarray::", fieldarray);
  return fieldarray;
}
