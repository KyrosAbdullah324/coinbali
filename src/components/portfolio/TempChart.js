////////////////////----------------STABLE-------------------////////////////////
import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { formatCurrency, formatCurrencyFixed2 } from "../../util";

const Chart = ({ data }) => {
  const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `#365195`,
    labelColor: (opacity = 0.4) => `rgba(0, 0, 0, 0.4)`,
    style: {
      borderRadius: 16,
      borderWidth: 45,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
    propsForLabels:{
      fontSize: "8",
      fill: "rgba(0, 0, 0, 0.4)",
      fontFamily: 'Montserrat-Regular',
      textAlign:'left',
      padding: 5
    }
  };

  // const yAxisInterval = 20;
  let yAxisMin = Math.min(...data);
  let yAxisMax = Math.max(...data);
  let yAxisRange = yAxisMax - yAxisMin;
  const yAxisInterval = 10 ** Math.floor(Math.log10(yAxisRange));
  yAxisMin = parseInt(yAxisMin / yAxisInterval) * yAxisInterval;
  yAxisMax = Math.ceil(yAxisMax / yAxisInterval) * yAxisInterval;
  const yAxisCount = Math.ceil(yAxisRange / yAxisInterval);

  const yAxisLabels = [...Array(yAxisCount + 1)].map((_, i) => {
    let label = yAxisMin + i * yAxisInterval;
    return label;
  });
  function* ylabel() {
    yield* yAxisLabels;
  }

  const yLabelIterator = ylabel();
  return (
    <View style={{ width: "100%", overflow: "hidden" }}>
      <LineChart
        data={{
          datasets: [
            { data, withDots: false, strokeWidth: 1 },
            { data: [yAxisMin], withDots: false },
            { data: [yAxisMax], withDots: false },
          ],
        }}
        chartConfig={chartConfig}
        yAxisInterval={yAxisInterval}
        yAxisSuffix=""
        yAxisMin={yAxisMin}
        yAxisMax={yAxisMax}
        fromZero={false}
        width={400}
        height={200}
        withInnerLines={true}
        withOuterLines={false}
        withHorizontalLines={false}
        withVerticalLines={false}
        segments={yAxisCount}
        formatYLabel={() => formatCurrencyFixed2(yLabelIterator.next().value)}
      />
    </View>
  );
};

export default Chart;
