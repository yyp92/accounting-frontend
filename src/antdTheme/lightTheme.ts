const activeColor = '#3591F4'
const activeColor1 = 'rgba(53, 145, 244, 0.5)'
const activeColor2 = 'rgba(53, 145, 244, 0.8)'
const activeColor3 = 'rgba(53, 145, 244, 0.1)'
const successColor = '#0CAA43'
const successColor1 = 'rgba(12, 170, 67, 0.5)'
const successColor2 = 'rgba(12, 170, 67, 0.2)'
const warnColor = '#FFA00A'
const warnColor1 = 'rgba(255, 160, 10, 0.5)'
const warnColor2 = 'rgba(255, 160, 10, 0.2)'
const errorColor = '#F43835'
const errorColor1 = 'rgba(244, 56, 53, 0.5)'
const errorColor2 = 'rgba(244, 56, 53, 0.8)'

const bgColor = '#FFFFFF'
const bgGreyColor = '#F2F4F9'
const textColor = '#363A45'
const textColor1 = '#898d97'
const textColor2 = '#FFFFFF'
const iconColor = '#CCD6DD'
const borderColor = '#DDE6F0'
const fontSize12 = 12
const lineHeight12 = 1.5
const fontSize14 = 14
const lineHeight14 = 1.4286
const height = 36

export const lightToken = {
    token: {
        colorBgContainer: bgColor,
        colorBgContainerDisabled: bgGreyColor,
        colorBorder: borderColor,
        colorSplit: borderColor,
        colorText: textColor,
        colorTextDescription: textColor1,
        colorTextDisabled: textColor1,
        colorTextLightSolid: textColor2,
        colorTextPlaceholder: textColor1,
        colorIcon: iconColor,
        colorBgSolidHover: activeColor2,
        colorTextQuaternary: iconColor,
        
        colorWarning: errorColor,
        colorSuccess: successColor,

        colorPrimary: activeColor,
        colorPrimaryActive: activeColor,
        colorPrimaryHover: activeColor,
        colorPrimaryText: activeColor,
        colorPrimaryTextActive: activeColor,
        colorPrimaryTextHover: activeColor,

        colorLink: activeColor,
        colorLinkActive: activeColor,
        colorLinkHover: activeColor,

        colorError: errorColor,
        colorErrorActive: errorColor,
        colorErrorHover: errorColor,

        borderRadius: 4,
        fontSize: fontSize14,
        lineHeight: lineHeight14,
        controlHeight: 32,

        controlItemBgHover: bgGreyColor,
        controlItemBgActiveHover: activeColor3,
        controlItemBgActive: activeColor3,

        colorTextHeading: textColor,
    },
    components: {
        Button: {
            borderColorDisabled: borderColor,
            contentFontSize: fontSize14,
            contentLineHeight: lineHeight14,
            dangerColor: bgColor,
            dangerShadow: 'none',
            defaultActiveBg: bgColor,
            defaultActiveBorderColor: activeColor,
            defaultActiveColor: activeColor,
            defaultBg: bgColor,
            defaultBorderColor: borderColor,
            defaultColor: textColor,
            defaultGhostBorderColor: bgColor,
            defaultGhostColor: bgColor,
            defaultHoverBg: bgColor,
            defaultHoverBorderColor: activeColor,
            defaultHoverColor: activeColor,
            defaultShadow: 'none',
            paddingBlock: 5,
            paddingInline: 10,
            primaryColor: textColor2,
            primaryShadow: 'none',
            textTextActiveColor: textColor,
            textTextColor: textColor,
            textTextHoverColor: textColor,
        },
        Dropdown: {
            paddingBlock: 7,
            padding: 0,
            paddingXS: 0,
            paddingXXS: 0,
            controlPaddingHorizontal: 10
        },
        Menu: {
            itemHeight: 40,
            itemBg: bgColor,
            itemColor: textColor,
            itemHoverBg: bgGreyColor,
            itemHoverColor: textColor,
            itemSelectedColor: activeColor,
            itemSelectedBg: activeColor3,
            popupBg: bgColor,
            horizontalItemHoverBg: bgColor,
            horizontalItemHoverColor: activeColor,
            horizontalItemSelectedBg: activeColor3,
            horizontalItemSelectedColor: activeColor,
            itemActiveBg: activeColor3,
            itemMarginBlock: 4,
            itemMarginInline: 8,
            itemBorderRadius: 4,
            itemPaddingInline: 16,
            iconSize: 20,
            iconMarginInlineEnd: 8,
            dropdownWidth: 200,
        },
        Form: {
            labelColor: textColor,
            labelFontSize: fontSize14,
            labelHeight: height,
            labelRequiredMarkColor: errorColor,
            verticalLabelPadding: '0 0 8px',
            itemMarginBottom: 12,
            colorBorder: borderColor,
            colorError: errorColor,
            colorPrimary: activeColor,
            colorSuccess: successColor,
            colorWarning: warnColor,
            colorText: textColor,
            colorTextDescription: textColor1,
            controlHeight: height,
            fontSize: fontSize14,
            lineHeight: lineHeight14,
        },
        Input: {
            activeBg: bgColor,
            activeBorderColor: activeColor,
            activeShadow: 'none',
            hoverBg: bgColor,
            hoverBorderColor: activeColor,
            inputFontSize: fontSize14,
            paddingBlock: 6,
            paddingInline: 10,
            controlHeight: height,
        },
        InputNumber: {
            activeBg: bgColor,
            activeBorderColor: activeColor,
            activeShadow: 'none',
            handleBorderColor: borderColor,
            handleHoverColor: activeColor,
            hoverBg: bgColor,
            hoverBorderColor: activeColor,
            inputFontSize: 14,
            paddingBlock: 7,
            paddingInline: 10,
            controlHeight: height,
            addonBg: bgColor,
        },
        Radio: {
            buttonBg: bgColor,
            buttonCheckedBg: bgColor,
            buttonCheckedBgDisabled: bgGreyColor,
            buttonCheckedColorDisabled: textColor1,
            buttonColor: textColor,
            radioSize: 18,
            dotSize: 8,
            buttonSolidCheckedActiveBg: activeColor,
            buttonSolidCheckedBg: activeColor,
            buttonSolidCheckedColor: textColor2,
            buttonSolidCheckedHoverBg: activeColor,
            dotColorDisabled: iconColor,
        },
        Switch: {
            handleBg: bgColor,
            handleShadow: 'unset',
            handleSize: 18,
            trackMinWidth: 45,
            trackHeight: 22,
            colorTextQuaternary: iconColor,
            colorTextTertiary: iconColor,
        },
        Select: {
            activeBorderColor: activeColor,
            activeOutlineColor: 'none',
            clearBg: bgColor,
            hoverBorderColor: activeColor,
            multipleItemBg: bgGreyColor,
            multipleItemBorderColor: 'transparent',
            multipleItemBorderColorDisabled: 'transparent',
            multipleItemHeight: 28,
            multipleSelectorBgDisabled: bgGreyColor,
            optionActiveBg: bgGreyColor,
            optionFontSize: fontSize14,
            optionHeight: 32,
            optionLineHeight: lineHeight14,
            optionPadding: '5px 12px',
            optionSelectedBg: activeColor3,
            optionSelectedColor: activeColor,
            selectorBg: bgColor,
            showArrowPaddingInlineEnd: 10,
            controlHeight: height,
            paddingSM: 10,
        },
        DatePicker: {
            colorBgElevated: bgColor,
            activeBg: bgColor,
            activeBorderColor: activeColor,
            activeShadow: 'none',
            cellActiveWithRangeBg: activeColor2,
            cellBgDisabled: bgGreyColor,
            cellHoverBg: bgGreyColor,
            cellHoverWithRangeBg: activeColor2,
            cellRangeBorderColor: activeColor,
            hoverBg: bgColor,
            hoverBorderColor: activeColor,
            multipleItemColorDisabled: textColor1,
            multipleSelectorBgDisabled: bgGreyColor,
            controlHeight: height
        },
        Modal: {
            contentBg: bgColor,
            footerBg: 'transparent',
            headerBg: bgColor,
            titleColor: textColor,
            titleFontSize: 16,
            titleLineHeight: 1.5,
        },
        Drawer: {
            colorBgElevated: bgColor
        },
        Progress: {
            circleTextColor: textColor,
            defaultColor: activeColor,
            remainingColor: bgGreyColor,
        },
        TreeSelect: {
            nodeHoverBg: bgGreyColor,
            nodeHoverColor: textColor,
            nodeSelectedBg: activeColor3,
            nodeSelectedColor: activeColor,
            titleHeight: 32,
        },
        Tabs: {
            cardBg: bgColor,
            cardGutter: 0,
            cardHeight: 40,
            cardPadding: '10px 16px',
            horizontalItemGutter: 0,
            inkBarColor: activeColor,
            itemActiveColor: activeColor,
            itemColor: textColor,
            itemHoverColor: activeColor,
            itemSelectedColor: activeColor,
            colorBorderSecondary: borderColor,
        },
        Table: {
            borderColor: borderColor,
            headerBg: bgGreyColor,
            headerBorderRadius: 4,
            headerColor: textColor,
            headerSplitColor: bgGreyColor,
            rowHoverBg: bgGreyColor,
            rowSelectedBg: activeColor3,
            rowSelectedHoverBg: activeColor3,
            cellPaddingBlock: 10,
        },
        Pagination: {
            itemActiveBg: bgColor,
            itemActiveBgDisabled: bgGreyColor,
            itemActiveColorDisabled: textColor1,
            itemBg: bgColor,
            itemInputBg: bgColor,
            itemLinkBg: bgColor,
        },
        Cascader: {
            optionPadding: '5px 12px',
            optionSelectedBg: activeColor3,
            optionSelectedColor: activeColor,
        },
        Message: {
            contentBg: bgColor
        },
        Upload: {
            actionsColor: textColor
        },
    }
}
