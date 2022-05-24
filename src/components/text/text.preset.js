import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: spacing[4],
    color: colors.white
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: spacing[4],
    color: colors.white
}

const BOLD = {
    fontFamily: typography.bold,
    color: colors.white
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: spacing[8]
    },
    h2: {
        ...BOLD,
        fontSize: spacing[7]
    },
    h3: {
        ...BASE_BOLD,
        fontSize: spacing[6]
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 14,
    },
    small: {
        ...BASE,
        fontSize: 12,
    }

}