import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgrounColor: COLORS.white,
        padding: 12,
    },
    item: {
        borderBottomWidth: 1,
        borderColor: COLORS.gray4,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15,
    },
    title: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4,
    },
    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginLeft: 8,
    },
}
