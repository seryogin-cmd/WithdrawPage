import { Stack, Typography } from "@mui/material";
import { SegmentedControl } from "../components/SegmentedControl";
import { BankSelect } from "../components/BankSelect";
import { AmountInput } from "../components/AmountInput";
import { InputField } from "../components/InputField";
import { ProgressSections } from "../components/ProgressSections";
import { RequisiteTypeRadio } from "../components/RequisiteTypeRadio";
import { SaveRequisitesCheckbox } from "../components/SaveRequisitesCheckbox";

export const WithdrawPage = () => (
  <Stack
    gap={3}
    padding={2}
    width="100%"
    maxWidth={600}
    bgcolor="#f3f3f3"
    borderRadius={1}
  >
    <Stack direction="column" gap={2}>
      <Typography variant="title">Способ вывода</Typography>
      <SegmentedControl />
      <BankSelect />
    </Stack>

    <Stack direction="column" gap={2}>
      <Typography variant="title">Объемы</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <AmountInput
          subtitle="Отдаете (лот 1000)"
          label="Ethereum, ETH"
          value="1 300.00000"
          name="Ethereum, ETH"
        />
        <AmountInput
          subtitle="Получаете (лот 1000)"
          subtitleRight={true}
          label="Рубль, RUR"
          value="1 200.00"
          name="Рубль, RUR"
        />
      </Stack>
      <ProgressSections activeSections={2} />
    </Stack>

    <Stack direction="column" gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="title">Реквизиты</Typography>
        <SaveRequisitesCheckbox label="Сохранить реквизиты" />
      </Stack>
      <InputField
        name="number-card"
        placeholder="Номер карты"
        header={<RequisiteTypeRadio />}
      />
      <InputField name="owner-name" placeholder="ФИО владельца" />
      <InputField name="address" placeholder="Адрес" />
    </Stack>
  </Stack>
);
