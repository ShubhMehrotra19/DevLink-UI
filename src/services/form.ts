import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export async function create(data: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.create({ data });

    if (!user) {
      return [
        false,
        new Error("There was some error creating entry in the database"),
      ];
    }

    return [true, { data: user }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function getOne(where: Prisma.UserWhereUniqueInput) {
  try {
    const user = await prisma.user.findFirst({ where: where });

    if (!user) {
      return [
        false,
        new Error("There was some error finding the entry from the database"),
      ];
    }

    return [true, { data: user }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function getMany(where: Prisma.UserWhereInput) {
  try {
    const users = await prisma.user.findMany({ where: where });

    if (!users) {
      return [
        false,
        new Error("There was some error finding the entry from the database"),
      ];
    }

    return [true, { data: users }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function deleteOne(where: Prisma.UserWhereUniqueInput) {
  try {
    const user = await prisma.user.delete({
      where: where,
    });

    if (!user) {
      return [
        false,
        new Error("There was some error deleting the entry from the database"),
      ];
    }

    return [true, { data: "Deleted" }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function deleteMany(where: Prisma.UserWhereInput) {
  try {
    const users = await prisma.user.deleteMany({
      where: where,
    });

    if (!users) {
      return [
        false,
        new Error(
          "There was some error deleting the entries from the database"
        ),
      ];
    }

    return [true, { data: "Deleted" }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}

export async function update(
  where: Prisma.UserWhereUniqueInput,
  data: Prisma.UserUpdateInput
) {
  try {
    const user = await prisma.user.update({
      where: where,
      data: data,
    });

    if (!user) {
      return [
        false,
        new Error("There was some error updating the entry in the database"),
      ];
    }

    return [true, { data: user }];
  } catch (error) {
    return [false, new Error("Error 500 Internal Server Error")];
  }
}
