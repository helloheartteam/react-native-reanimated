import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  // loop,
  concat,
  interpolateNode,
  repeat
} from 'react-native-reanimated';
import { View, Button } from 'react-native';
import React from 'react';

const dummy = new Array(1).fill(1);
function AnimatedStyleUpdateExample() {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      {dummy.map((_, i) => {

        const val = useSharedValue(0);
        const DEG = Math.PI * 2 * 10;
        val.value = withRepeat(
          withTiming(DEG, { duration: 5000 }),
          -1, true
        );

        const style = useAnimatedStyle(() => {
          'worklet'
          return {
            transform: [
               { rotate: val.value + 'deg' },
            ],
          };
        });

        return (
          <Animated.View
            key={i}
            style={[
              { width: 50, height: 50, borderWidth: 1 },
              style,
            ]}
          />
        );
      })}
    </View>
  );
}

export default AnimatedStyleUpdateExample;

// import { loop } from "react-native-redash/src/v1";
// const dummy = new Array(100).fill(1);
// function AnimatedStyleUpdateExample() {
//   return (
//     <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
//       {dummy.map((_, i) => {
//         //reanimated1 code
//         const val = loop({ duration: Math.random() * 2000 + 4000 });

//         const style = {
//           transform: [
//             {
//               rotate: concat(
//                 interpolateNode(val, {
//                   inputRange: [0, 1],
//                   outputRange: [0, Math.PI * 2],
//                 }),
//                 "rad"
//               ),
//             },
//           ],
//         };
//         return (
//           <Animated.View
//             key={i}
//             style={[
//               {
//                 width: 50,
//                 height: 50,
//                 borderWidth: 1,
//                 backgroundColor: `hsl(${(360 / dummy.length) * i}, 100%, 40%)`,
//               },
//               style,
//             ]}
//           />
//         );
//       })}
//     </View>
//   );
// }

// export default AnimatedStyleUpdateExample;