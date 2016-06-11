var data = {
    examples: true,
    rules: [
        {
            name: 'accepted',
            description: 'The field under validation must be <em>yes</em>, <em>on</em>, 1, or <em>true</em>. This is useful for validating "Terms of Service" acceptance.',
            examples: [
                "'terms_of_service' => 'acceptance'"
            ],
            notes: []
        },
        {
            name: 'active_url',
            description: 'The field under validation must be a valid URL according to the checkdnsrr PHP function.'
        },
        {
            name: 'after:date',
            description: "The field under validation must be a value after a given date. The dates will be passed into the strtotime PHP function:\
        \
            'start_date' => 'required|date|after:tomorrow'\
            Instead of passing a date string to be evaluated by strtotime, you may specify another field to compare against the date:\
        \
            'finish_date' => 'required|date|after:start_date'"
        },
        {
            name: 'alpha',
            description: "The field under validation must be entirely alphabetic characters."
        },
        {
            name: 'alpha_dash',
            description: "The field under validation may have alpha-numeric characters, as well as dashes and underscores."
        },
        {
            name: 'alpha_num',
            description: "The field under validation must be entirely alpha-numeric characters."
        },
        {
            name: 'array',
            description: "The field under validation must be a PHP array."
        },
        {
            name: 'before:date',
            description: "The field under validation must be a value preceding the given date. The dates will be passed into the PHP strtotime function."
        },
        {
            name: 'between:min,max',
            description: "The field under validation must have a size between the given min and max. Strings, numerics, and files are evaluated in the same fashion as the size rule."
        },
        {
            name: 'boolean',
            description: "The field under validation must be able to be cast as a boolean. Accepted input are true, false, 1, 0, \"1\", and \"0\"."
        },
        {
            name: 'confirmed',
            description: "The field under validation must have a matching field of foo_confirmation. For example, if the field under validation is password, a matching password_confirmation field must be present in the input."
        },
        {
            name: 'date',
            description: "The field under validation must be a valid date according to the strtotime PHP function."
        },
        {
            name: 'date_format:format',
            description: "The field under validation must match the given format. The format will be evaluated using the PHP date_parse_from_format function. You should use either date or date_format when validating a field, not both."
        },
        {
            name: 'different:field',
            description: "The field under validation must have a different value than field."
        },
        {
            name: 'digits:value',
            description: "The field under validation must be numeric and must have an exact length of value."
        },
        {
            name: 'digits_between:min,max',
            description: "The field under validation must have a length between the given min and max."
        },
        {
            name: 'dimensions',
            description: "The file under validation must be an image meeting the dimension constraints as specified by the rule's parameters:\
                'avatar' => 'dimensions:min_width=100,min_height=200'\
                Available constraints are: min_width, max_width, min_height, max_height, width, height, ratio."
        },
        {
            name: 'distinct',
            description: "When working with arrays, the field under validation must not have any duplicate values.\
            \
            'foo.*.id' => 'distinct'"
        },
        {
            name: 'email',
            description: "The field under validation must be formatted as an e-mail address."
        },
        {
            name: 'exists:table,column',
            description: "The field under validation must exist on a given database table.\
                \
                Basic Usage Of Exists Rule\
                \
                'state' => 'exists:states'\
                Specifying A Custom Column Name\
                \
                'state' => 'exists:states,abbreviation'\
                You may also specify more conditions that will be added as \"where\" clauses to the query:\
                \
                'email' => 'exists:staff,email,account_id,1'\
                These conditions may be negated using the ! sign:\
                \
                'email' => 'exists:staff,email,role,!admin'\
                You may also pass NULL or NOT_NULL to the \"where\" clause:\
                \
                'email' => 'exists:staff,email,deleted_at,NULL'\
                \
                'email' => 'exists:staff,email,deleted_at,NOT_NULL'\
                Occasionally, you may need to specify a specific database connection to be used for the exists query. You can accomplish this by prepending the connection name to the table name using \"dot\" syntax:\
                \
                'email' => 'exists:connection.staff,email'"
        },
        {
            name: 'filled',
            description: "The field under validation must not be empty when it is present."
        },
        {
            name: 'image',
            description: "The file under validation must be an image (jpeg, png, bmp, gif, or svg)"
        },
        {
            name: 'in:foo,bar,...',
            description: "The field under validation must be included in the given list of values."
        },
        {
            name: 'in_array:anotherfield',
            description: "The field under validation must exist in anotherfield's values."
        },
        {
            name: 'integer',
            description: "The field under validation must be an integer."

        },
        {
            name: 'ip',
            description: "The field under validation must be an IP address."

        },
        {
            name: 'json',
            description: "The field under validation must be a valid JSON string."

        },
        {
            name: 'max:value',
            description: "The field under validation must be less than or equal to a maximum value. Strings, numerics, and files are evaluated in the same fashion as the size rule."

        },
        {
            name: 'mimetypes:text/plain,...',
            description: "The file under validation must match one of the given MIME types:\
                \
                'video' => 'mimetypes:video/avi,video/mpeg,video/quicktime'\
                To determine the MIME type of the uploaded file, the file's contents will be read and the framework will attempt to guess the MIME type, which may be different from the client provided MIME type."
        },
        {
            name: 'mimes:foo,bar,...',
            description: "The file under validation must have a MIME type corresponding to one of the listed extensions.\
            Basic Usage Of MIME Rule',\
            'photo' => 'mimes:jpeg,bmp,png'\
                Even though you only need to specify the extensions, this rule actually validates against the MIME type of the file by reading the file's contents and guessing its MIME type.\
                \
                A full listing of MIME types and their corresponding extensions may be found at the following location: http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types"
        },
        {
            name: 'min:value',
            description: "The field under validation must have a minimum value. Strings, numerics, and files are evaluated in the same fashion as the size rule."
        },
        {
            name: 'not_in:foo,bar,...',
            description: "The field under validation must not be included in the given list of values."
        },
        {
            name: 'numeric',
            description: "The field under validation must be numeric."
        },
        {
            name: 'present',
            description: "The field under validation must be present in the input data but can be empty."
        },
        {
            name: 'regex:pattern',
            description: "The field under validation must match the given regular expression.\
                Note: When using the regex pattern, it may be necessary to specify rules in an array instead of using pipe delimiters, especially if the regular expression contains a pipe character."
        },
        {
            name: 'required',
            description: "The field under validation must be present in the input data and not empty. A field is considered \"empty\" if one of the following conditions are true:\
                \
                The value is null.\
                The value is an empty string. \
                The value is an empty array or empty Countable object.\
                The value is an uploaded file with no path."
        },
        {
            name: 'required_if:anotherfield,value,...',
            description: "The field under validation must be present if the anotherfield field is equal to any value."
        },
        {
            name: 'required_unless:anotherfield,value,...',
            description: "The field under validation must be present unless the anotherfield field is equal to any value."
        },
        {
            name: 'required_with:foo,bar,...',
            description: "The field under validation must be present only if any of the other specified fields are present."
        },
        {
            name: 'required_with_all:foo,bar,...',
            description: "The field under validation must be present only if all of the other specified fields are present."
        },
        {
            name: 'required_without:foo,bar,...',
            description: "The field under validation must be present only when any of the other specified fields are not present."
        },
        {
            name: 'required_without_all:foo,bar,...',
            description: "The field under validation must be present only when all of the other specified fields are not present."
        },
        {
            name: 'same:field',
            description: "The given field must match the field under validation."
        },
        {
            name: 'size:value',
            description: "The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value. For files, size corresponds to the file size in kilobytes."
        },
        {
            name: 'string',
            description: "The field under validation must be a string."
        },
        {
            name: 'timezone',
            description: "The field under validation must be a valid timezone identifier according to the timezone_identifiers_list PHP function."
        },
        {
            name: 'unique:table,column,except,idColumn',
            description: "The field under validation must be unique on a given database table. If the column option is not specified, the field name will be used.\
                \
                Specifying A Custom Column Name:\
                \
                'email' => 'unique:users,email_address'\
                Custom Database Connection\
                \
                Occasionally, you may need to set a custom connection for database queries made by the Validator. As seen above, setting unique:users as a validation rule will use the default database connection to query the database. To override this, specify the connection followed by the table name using \"dot\" syntax:\
                \
                'email' => 'unique:connection.users,email_address'\
                Forcing A Unique Rule To Ignore A Given ID:\
                \
                Sometimes, you may wish to ignore a given ID during the unique check. For example, consider an \"update profile\" screen that includes the user's name, e-mail address, and location. Of course, you will want to verify that the e-mail address is unique. However, if the user only changes the name field and not the e-mail field, you do not want a validation error to be thrown because the user is already the owner of the e-mail address. You only want to throw a validation error if the user provides an e-mail address that is already used by a different user. To tell the unique rule to ignore the user's ID, you may pass the ID as the third parameter:\
                \
                'email' => 'unique:users,email_address,'.$user->id\
                If your table uses a primary key column name other than id, you may specify it as the fourth parameter:\
                \
                'email' => 'unique:users,email_address,'.$user->id.',user_id'\
                Adding Additional Where Clauses:\
                \
                You may also specify more conditions that will be added as \"where\" clauses to the query:\
                \
                'email' => 'unique:users,email_address,NULL,id,account_id,1'\
                In the rule above, only rows with an account_id of 1 would be included in the unique check."
        },
        {
            name: 'url',
            description: "The field under validation must be a valid URL according to PHP's filter_var function."
        }
    ]
};

var app = new Vue({
  el: 'body',
  data: data
});