import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        backgrounColor: COLORS.white,
        flex: 1,
        justifyContent: "space-between",
        padding: 50,
    },
    containerLogo: {
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 23,
    },
    containerInput: {
        marginBottom: 15,
    },
    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6,
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    footerLink: {
        color: COLORS.blue,
    }
}
