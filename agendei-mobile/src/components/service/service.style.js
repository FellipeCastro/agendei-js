import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    service: {
        flex: 1,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        borderBottomWidth: 1,
        borderColor: COLORS.gray4,
    },
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        marginTop: 5,
    },
    price: {
        fontSize: FONT_SIZE.md,
        color: COLORS.blue,
        marginTop: 5,
    },
}
