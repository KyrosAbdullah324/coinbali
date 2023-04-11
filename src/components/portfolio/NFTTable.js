import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Table, Row } from "react-native-table-component";

import * as Convert from "../../util";
const IMAGE_PATH = "../../../assets/images/";

const TableComponent = ({data}) => {
  let tableData = data.map((item) => {
    return [
      <NameCell nameCellData={item} key={item.id} />,
      Convert.formatNumber(item.amount),
      Convert.formatCurrency(item.price),
      Convert.formatCurrency(item.total),
    ];
  });
  tableData.unshift(
    [
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ ...styles.headerText, marginLeft: 20 }}>Name</Text>
      </View>,
      <Text style={styles.headerText}>Amount</Text>,
      <Text style={styles.headerText}>Price</Text>,
      <Text style={styles.headerText}>Total</Text>,
    ],
  )

  return (
    <Table borderStyle={{ borderColor: "#c8e1ff" }}>
      {tableData.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}
          style={Object.assign({}, styles.row, 
            index === 0 ? styles.header : null, 
            { paddingTop: 4, paddingBottom: 4 }
          )}
          textStyle={styles.text}
          flexArr={[1.67, 1, 1, 1]}
        />
      ))}
    </Table>
  );
};

const NameCell = ({ nameCellData }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ width: 24, height: 24, marginRight: 6 }}
        source={nameCellData.image}
      />
      <View>
        <Text style={styles.amount}>{nameCellData.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "white" },
  header: {
    height: 23,
    backgroundColor: "#F0F1F9",
    borderBottomWidth: 0,
    borderRadius: 4,
  },
  headerText: {
    color: "#365195",
    fontFamily: 'Montserrat-Medium',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 12,
    lineHeight: 15,
  },
  row: {
    height: 44,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    alignSelf: "center",
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: "#000000",
    lineHeight: 15,
    marginRight: 3,
  },
  fullName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: "#000000",
    lineHeight: 15,
    marginRight: 3,
  },
  abbrName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: "#00000080",
    lineHeight: 15,
  },
  amount: { fontFamily: 'Montserrat-SemiBold', fontSize: 12, color: "#000000", lineHeight: 15 },
  profitLossPositive: {
    color: "green",
    width: "100%",
    textAlign: "center",
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    marginRight: 3,
  },
  profitLossNegative: {
    color: "red",
    width: "100%",
    textAlign: "center",
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    marginRight: 3,
  },
});

export default TableComponent;
