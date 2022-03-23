import { Center, Text } from "native-base";
import React from "react";
import { theme } from "../../theme/theme";
function Commingsoon() {
    return (
        <Center flex={1}>
            <Text style={{ ...theme.fontSize.h2, color: theme.colors.text }}>Comming Soon....</Text>
        </Center>
    )
}
export default Commingsoon;