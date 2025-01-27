import { StyleSheet } from "react-native";

import Error from "@/components/ui/Error";

export default function NotFoundScreen() {
  return <Error />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
