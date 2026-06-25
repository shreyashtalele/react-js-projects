import useTheme from "../context/theme";

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = (e) => {
    const checked = e.target.checked;

    if (checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={themeMode === "dark"}
        onChange={onChangeBtn}
      />
      Toggle Theme
    </label>
  );
}
