import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export const formatFecha = (fechaString) => {
  return format(parseISO(fechaString), "PPpp", {
    locale: es,
  });
};
