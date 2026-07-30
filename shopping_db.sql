CREATE TABLE `categories`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `products`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `categ_id` BIGINT NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL
);
CREATE TABLE `lists`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `due_date` DATE NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `status` TINYINT NOT NULL,
    `shopper_id` BIGINT NOT NULL
);
CREATE TABLE `units`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` BIGINT NOT NULL
);
CREATE TABLE `shoppers`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` BIGINT NOT NULL
);
CREATE TABLE `list_items`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `list_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    `quantity` DECIMAL(8, 2) NOT NULL,
    `unit_id` BIGINT NOT NULL,
    `is_taken` TINYINT NOT NULL
);
ALTER TABLE
    `lists` ADD CONSTRAINT `lists_id_foreign` FOREIGN KEY(`id`) REFERENCES `list_items`(`list_id`);
ALTER TABLE
    `categories` ADD CONSTRAINT `categories_id_foreign` FOREIGN KEY(`id`) REFERENCES `products`(`categ_id`);
ALTER TABLE
    `units` ADD CONSTRAINT `units_id_foreign` FOREIGN KEY(`id`) REFERENCES `list_items`(`unit_id`);
ALTER TABLE
    `products` ADD CONSTRAINT `products_id_foreign` FOREIGN KEY(`id`) REFERENCES `list_items`(`product_id`);
ALTER TABLE
    `shoppers` ADD CONSTRAINT `shoppers_id_foreign` FOREIGN KEY(`id`) REFERENCES `lists`(`shopper_id`);