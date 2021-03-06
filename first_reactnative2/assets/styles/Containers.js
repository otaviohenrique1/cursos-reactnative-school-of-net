import { StyleSheet } from "react-native";
import Spacing from "./Spacing";

export const Containers = StyleSheet.create({
    mainContainer: {
        flex: 1,
        ...Spacing.normalizeSpace
    },
    headerContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    contentContainer: {
        flex: 9,
        backgroundColor: 'purple'
    },
    footerContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
});
